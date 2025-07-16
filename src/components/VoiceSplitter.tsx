import React, { useState, useRef, useEffect } from 'react';

interface ProgressData {
  progress: number;
  message: string;
  status: 'connecting' | 'processing' | 'finalizing' | 'completed' | 'error';
  result?: {
    voice_track_url: string;
    instruments_track_url: string;
  };
}

const VoiceSplitter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [progressStatus, setProgressStatus] = useState<ProgressData['status']>('connecting');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [results, setResults] = useState<ProgressData['result'] | null>(null);
  const [showProgress, setShowProgress] = useState(false);
  
  const currentEventSource = useRef<EventSource | null>(null);

  // Cleanup EventSource on unmount
  useEffect(() => {
    return () => {
      if (currentEventSource.current) {
        currentEventSource.current.close();
      }
    };
  }, []);

  // Hide global footer for this page
  useEffect(() => {
    const footer = document.querySelector('.footer') as HTMLElement;
    if (footer) {
      footer.style.display = 'none';
    }
    
    // Show footer when component unmounts
    return () => {
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);

  const resetUI = () => {
    setError('');
    setSuccess('');
    setResults(null);
    setShowProgress(false);
    setIsProcessing(false);
    setProgress(0);
    setProgressMessage('');
    setProgressStatus('connecting');
    
    if (currentEventSource.current) {
      currentEventSource.current.close();
      currentEventSource.current = null;
    }
  };

  const updateProgress = (progressData: ProgressData) => {
    setProgress(progressData.progress);
    setProgressMessage(progressData.message);
    setProgressStatus(progressData.status);
  };

  const startProgressStreaming = (jobId: string) => {
    setShowProgress(true);
    updateProgress({
      progress: 0,
      message: 'Connecting to server...',
      status: 'connecting'
    });
    
    let isCompleted = false;
    const progressUrl = `https://voice-splitter-755776231771.us-central1.run.app/progress/${jobId}`;
    
    try {
      currentEventSource.current = new EventSource(progressUrl);
      
      currentEventSource.current.onopen = () => {
        updateProgress({
          progress: 5,
          message: 'Connected to server, starting processing...',
          status: 'processing'
        });
      };
      
      currentEventSource.current.onmessage = (event) => {
        try {
          const data: ProgressData = JSON.parse(event.data);
          updateProgress(data);
          
          if (data.status === 'completed') {
            isCompleted = true;
            
            if (currentEventSource.current) {
              currentEventSource.current.close();
              currentEventSource.current = null;
            }
            
            setResults(data.result || null);
            setSuccess('Audio processing completed successfully!');
            setIsProcessing(false);
            
          } else if (data.status === 'error') {
            isCompleted = true;
            
            if (currentEventSource.current) {
              currentEventSource.current.close();
              currentEventSource.current = null;
            }
            
            setError(data.message || 'Processing failed');
            setIsProcessing(false);
            setShowProgress(false);
          }
        } catch (e) {
          console.error('Error parsing message data:', e);
        }
      };

      currentEventSource.current.addEventListener('progress', (event) => {
        try {
          const data: ProgressData = JSON.parse(event.data);
          updateProgress(data);
          
          if (data.status === 'completed') {
            isCompleted = true;
            
            if (currentEventSource.current) {
              currentEventSource.current.close();
              currentEventSource.current = null;
            }
            
            setResults(data.result || null);
            setSuccess('Audio processing completed successfully!');
            setIsProcessing(false);
            
          } else if (data.status === 'error') {
            isCompleted = true;
            
            if (currentEventSource.current) {
              currentEventSource.current.close();
              currentEventSource.current = null;
            }
            
            setError(data.message || 'Processing failed');
            setIsProcessing(false);
            setShowProgress(false);
          }
        } catch (e) {
          console.error('Error parsing progress event data:', e);
        }
      });
      
      currentEventSource.current.onerror = () => {
        if (!isCompleted) {
          setError('Lost connection to server. Please try again.');
          setIsProcessing(false);
          setShowProgress(false);
        }
        
        if (currentEventSource.current) {
          currentEventSource.current.close();
          currentEventSource.current = null;
        }
      };
    } catch (error) {
      setError('Failed to establish connection for progress updates');
      setIsProcessing(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      resetUI();
    }
  };

  const handleSplit = async () => {
    if (!selectedFile) {
      setError('Please select an audio file.');
      return;
    }

    resetUI();
    setIsProcessing(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://voice-splitter-755776231771.us-central1.run.app/split', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to process audio');
      }

      if (!data.job_id) {
        throw new Error('Server did not return a job ID');
      }

      startProgressStreaming(data.job_id);

    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred while processing the audio.');
      setIsProcessing(false);
    }
  };

  const getStatusIndicatorClass = () => {
    const baseClass = 'status-indicator';
    return `${baseClass} status-${progressStatus}`;
  };

  return (
    <div style={{ 
      paddingTop: '80px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
         }}>
      <div style={{ flex: '1' }}>
        <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="page-title">Voice & Instrument Splitter</h1>
            <p className="page-subtitle">
              Upload your audio file and separate vocals from instruments using AI technology
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card-content">
              {/* File Upload Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="audioFile" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: '#1d1d1f'
                  }}
                >
                  Upload Audio File (MP3, WAV, OGG, FLAC, M4A)
                </label>
                <input
                  type="file"
                  id="audioFile"
                  accept=".mp3,.wav,.ogg,.flac,.m4a"
                  onChange={handleFileChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Split Button */}
              <button
                onClick={handleSplit}
                disabled={isProcessing || !selectedFile}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}
              >
                {isProcessing ? 'Processing...' : 'Split Audio'}
              </button>

              {/* Progress Section */}
              {showProgress && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    textAlign: 'center', 
                    fontWeight: '600', 
                    color: '#1d1d1f', 
                    marginBottom: '0.5rem' 
                  }}>
                    {progress}%
                  </div>
                  <div style={{
                    width: '100%',
                    height: '20px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '0.75rem'
                  }}>
                    <div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #007aff, #34c759)',
                        width: `${progress}%`,
                        transition: 'width 0.3s ease',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    color: '#666', 
                    fontSize: '14px',
                    minHeight: '20px'
                  }}>
                    <span 
                      className={getStatusIndicatorClass()}
                      style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        marginRight: '8px',
                        animation: progressStatus === 'completed' || progressStatus === 'error' 
                          ? 'none' 
                          : 'pulse 2s infinite'
                      }}
                    />
                    {progressMessage}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div style={{
                  color: '#e74c3c',
                  padding: '15px',
                  backgroundColor: '#fadbd8',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid #e74c3c'
                }}>
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div style={{
                  color: '#27ae60',
                  padding: '15px',
                  backgroundColor: '#d5f4e6',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid #27ae60'
                }}>
                  {success}
                </div>
              )}

              {/* Results Section */}
              {results && (
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ 
                      marginBottom: '0.75rem', 
                      color: '#1d1d1f',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      Vocals
                    </h3>
                    <audio 
                      controls 
                      style={{ width: '100%', marginBottom: '0.75rem' }}
                      src={results.voice_track_url}
                    />
                    <a
                      href={results.voice_track_url}
                      download="vocals.mp3"
                      className="btn btn-secondary"
                      style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        fontSize: '14px',
                        textDecoration: 'none',
                        marginRight: '0.5rem'
                      }}
                    >
                      Download Vocals
                    </a>
                  </div>

                  <div>
                    <h3 style={{ 
                      marginBottom: '0.75rem', 
                      color: '#1d1d1f',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      Instruments
                    </h3>
                    <audio 
                      controls 
                      style={{ width: '100%', marginBottom: '0.75rem' }}
                      src={results.instruments_track_url}
                    />
                    <a
                      href={results.instruments_track_url}
                      download="instruments.mp3"
                      className="btn btn-secondary"
                      style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        fontSize: '14px',
                        textDecoration: 'none'
                      }}
                    >
                      Download Instruments
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        .status-connecting { background-color: #007aff; }
        .status-processing { background-color: #ff9500; }
        .status-finalizing { background-color: #af52de; }
        .status-completed { background-color: #34c759; }
        .status-error { background-color: #ff3b30; }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        html, body {
          height: 100% !important;
        }
      `}</style>

      {/* Footer Section */}
      <section style={{ 
        backgroundColor: '#007aff', 
        color: 'white', 
        padding: '40px 0',
        margin: '0',
        width: '100%'
      }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '16px' }}>
            Powered by AI
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '18px', 
            fontWeight: 400, 
            lineHeight: '1.5', 
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto'
          }}>
            This voice separation technology is part of ongoing research in AI music applications. 
            Help support continued development of accessible music tools for everyone.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '24px'
          }}>
            <a href="/research" className="btn btn-primary" style={{
              backgroundColor: 'white', 
              color: '#007aff',
              textDecoration: 'none',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Learn About the Research
            </a>
            <a href="/donate" className="btn btn-secondary" style={{ 
              borderColor: 'white', 
              color: 'white',
              textDecoration: 'none',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Support Development
            </a>
          </div>

          <div style={{ 
            fontSize: '14px', 
            color: 'rgba(255,255,255,0.7)',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '20px'
          }}>
            © 2025 ré.ai - Where Music Meets AI
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceSplitter; 