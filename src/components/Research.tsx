import React, { useState, useEffect, useRef } from 'react';

// Type declaration for Chart.js
declare global {
  interface Window {
    Chart: any;
  }
}

// Interactive Guide Component
const InteractiveGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [currentStep, setCurrentStep] = useState(1);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);
  const [selectedTool, setSelectedTool] = useState<number | null>(null);

  const toolData = [
    { name: 'Moises.ai', useCase: "All-in-one musician's practice tool", ease: 5, cost: 'Freemium', feature: 'Integrated pitch/speed changer and chord detection.' },
    { name: 'LALAL.AI', useCase: 'Fast, high-quality online stem splitting', ease: 5, cost: 'Pay-per-minute', feature: 'Focus on clean separation quality and ease of use.' },
    { name: 'Audacity', useCase: 'Free, powerful, open-source audio editor', ease: 3, cost: 'Completely Free', feature: 'Full audio editing suite with offline AI plugins.' },
    { name: 'Spleeter-based sites', useCase: 'Basic, free online stem splitting', ease: 4, cost: 'Often Free', feature: 'The foundational open-source model; a good baseline.' }
  ];

  // Load Chart.js dynamically
  useEffect(() => {
    const loadChart = async () => {
      if (typeof window !== 'undefined' && !window.Chart) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = initChart;
        document.head.appendChild(script);
      } else if (window.Chart) {
        initChart();
      }
    };

    const initChart = () => {
      if (chartRef.current && window.Chart && activeTab === 'tools') {
        // Destroy existing chart
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          chartInstanceRef.current = new window.Chart(ctx, {
            type: 'bar',
            data: {
              labels: toolData.map(t => t.name),
              datasets: [{
                label: 'Ease of Use (for a beginner)',
                data: toolData.map(t => t.ease),
                backgroundColor: '#4A90E2',
                borderColor: '#357ABD',
                borderWidth: 1,
                borderRadius: 4,
              }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              indexAxis: 'y',
              scales: {
                x: { beginAtZero: true, max: 5, grid: { display: false } },
                y: { grid: { display: false } }
              },
              plugins: { legend: { display: false } },
              onClick: (event: any, elements: any) => {
                if (elements.length > 0) {
                  setSelectedTool(elements[0].index);
                }
              }
            }
          });
        }
      }
    };

    if (activeTab === 'tools') {
      loadChart();
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [activeTab]);

  const guideStyles = `
    .guide-container { 
      font-family: 'Inter', sans-serif;
      background-color: #F8F9FA;
      color: #343A40;
      border-radius: 12px;
      padding: 2rem;
      margin: 1.5rem 0;
    }
    .guide-tab {
      cursor: pointer;
      padding: 0.75rem 1.5rem;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    .guide-tab.active {
      color: #4A90E2;
      border-bottom-color: #4A90E2;
    }
    .guide-tab:hover {
      color: #4A90E2;
    }
    .guide-card {
      background-color: white;
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      padding: 1.5rem;
      margin: 1rem 0;
    }
    .guide-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }
    .guide-btn {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }
    .guide-btn-primary { 
      background-color: #4A90E2; 
      color: white; 
    }
    .guide-btn-primary:hover { 
      background-color: #357ABD; 
    }
    .guide-btn-secondary { 
      background-color: #E9ECEF; 
      color: #343A40; 
    }
    .guide-btn-secondary:hover { 
      background-color: #DEE2E6; 
    }
    .guide-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .step-indicator {
      width: 2.5rem; 
      height: 2.5rem; 
      border-radius: 50%;
      display: flex; 
      align-items: center; 
      justify-content: center;
      font-weight: 700; 
      font-size: 1.125rem;
      transition: all 0.3s ease;
    }
    .step-indicator.active { 
      background-color: #4A90E2; 
      color: white; 
    }
    .step-indicator.inactive { 
      background-color: #E9ECEF; 
      color: #6C757D; 
    }
    .chart-container { 
      position: relative; 
      width: 100%; 
      max-width: 600px; 
      margin: 0 auto; 
      height: 350px; 
    }
  `;

  return (
    <div>
      <style>{guideStyles}</style>
      <div className="guide-container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
            The Un-baked Cake
          </h3>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
            An Interactive Exploration of AI Voice Separation Technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #e5e7eb', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {[
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'then-now', label: 'Then & Now' },
            { id: 'tools', label: 'The Tools' },
            { id: 'future', label: 'The Future' }
          ].map(tab => (
            <div
              key={tab.id}
              className={`guide-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* How It Works Tab */}
        {activeTab === 'how-it-works' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
                From Sound Wave to Separated Stem
              </h4>
              <p style={{ color: '#6b7280' }}>
                AI doesn't "un-mix" a song; it intelligently reconstructs it. Follow the steps below to see how a computer learns to listen.
              </p>
            </div>
            
            <div className="guide-card">
              {/* Step Indicators */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                {[1, 2, 3].map((step, index) => (
                  <React.Fragment key={step}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className={`step-indicator ${currentStep === step ? 'active' : 'inactive'}`}>
                        {step}
                      </div>
                      <span style={{ fontWeight: '600' }}>
                        {step === 1 ? 'See Sound' : step === 2 ? 'Train AI' : 'Apply Mask'}
                      </span>
                    </div>
                    {index < 2 && <span style={{ color: '#d1d5db', fontSize: '1.5rem', display: 'none' }}>→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
                    Step 1: Convert Sound into a Picture (Spectrogram)
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                    <div>
                      <p style={{ marginBottom: '1rem' }}>
                        A computer doesn't "hear" music. It converts the audio into a visual format called a <strong>spectrogram</strong>. This is like a heat map of the song:
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li><strong>Time</strong> flows from left to right.</li>
                        <li><strong>Frequency (Pitch)</strong> goes from low to high.</li>
                        <li><strong>Color/Brightness</strong> shows the volume.</li>
                      </ul>
                      <p>
                        Every instrument—vocals, drums, bass—creates a unique visual "fingerprint" on this map. The problem now becomes one of image analysis.
                      </p>
                    </div>
                    <div style={{ 
                      height: '200px', 
                      borderRadius: '0.5rem', 
                      background: 'linear-gradient(to top, #bfdbfe, #c4b5fd, #fed7aa)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: '700', 
                      color: '#4b5563' 
                    }}>
                      Spectrogram Visualization
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
                    Step 2: Train the AI with Labeled Data
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                    <div>
                      <p style={{ marginBottom: '1rem' }}>
                        The AI is trained on a huge library of songs where the vocals, drums, etc., are already separate (the "answer key"). It learns by:
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Analyzing the mixed song's spectrogram.</li>
                        <li>Making a guess about which parts are vocals.</li>
                        <li>Comparing its guess to the real vocal track.</li>
                        <li>Adjusting its internal logic to improve accuracy.</li>
                      </ul>
                      <p>
                        This is repeated millions of times, until the AI becomes an expert at recognizing the visual patterns of any sound.
                      </p>
                    </div>
                    <div style={{ 
                      height: '200px', 
                      borderRadius: '0.5rem', 
                      backgroundColor: '#f3f4f6',
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#4b5563',
                      padding: '1rem'
                    }}>
                      <div style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Neural Network (U-Net)</div>
                      <div style={{ fontSize: '0.875rem' }}>Encoder → Bottleneck → Decoder</div>
                      <div style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>(With Skip Connections)</div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
                    Step 3: Generate and Apply a "Mask"
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                    <div>
                      <p style={{ marginBottom: '1rem' }}>
                        The AI's final output isn't audio; it's a <strong>mask</strong>—a digital stencil. For vocal separation, this mask highlights every part of the spectrogram the AI has identified as a "voice."
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>The mask is laid over the original song's spectrogram.</li>
                        <li>It acts like a filter, letting only the vocal parts pass through.</li>
                        <li>The filtered visual data is converted back into an audio file.</li>
                      </ul>
                      <p>
                        The result is a clean, isolated vocal track, intelligently reconstructed by the AI.
                      </p>
                    </div>
                    <div style={{ 
                      height: '200px', 
                      borderRadius: '0.5rem', 
                      backgroundColor: '#f3f4f6',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: '700', 
                      color: '#4b5563',
                      position: 'relative',
                      padding: '1rem'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        inset: '0', 
                        background: 'linear-gradient(to top, #bfdbfe, #c4b5fd, #fed7aa)', 
                        opacity: '0.3',
                        borderRadius: '0.5rem'
                      }}></div>
                      <div style={{ 
                        position: 'relative', 
                        backgroundColor: 'white', 
                        padding: '1rem', 
                        borderRadius: '0.5rem', 
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
                      }}>
                        Vocal Mask Applied
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button
                  className="guide-btn guide-btn-secondary"
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  className="guide-btn guide-btn-primary"
                  onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
                  disabled={currentStep === 3}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Then & Now Tab */}
        {activeTab === 'then-now' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
                A Technological Leap
              </h4>
              <p style={{ color: '#6b7280' }}>
                Early attempts at voice separation were clever tricks with major flaws. AI brought a fundamentally new approach.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              <div className="guide-card">
                <h5 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>
                  THEN: The Old Ways (Pre-AI)
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <h6 style={{ fontWeight: '600', color: '#1f2937' }}>Phase Inversion</h6>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      Required a perfect instrumental track (rare) to cancel out music. Often left strange, ghostly artifacts.
                    </p>
                  </div>
                  <div>
                    <h6 style={{ fontWeight: '600', color: '#1f2937' }}>Center-Channel Extraction</h6>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      Tried to isolate vocals mixed in the "center," but also grabbed bass, kick, and snare drums, creating a muddy mess.
                    </p>
                  </div>
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                    <strong style={{ color: '#dc2626' }}>Core Limitation:</strong> Based on rigid mathematical rules that failed if a song was mixed unconventionally.
                  </div>
                </div>
              </div>
              
              <div className="guide-card">
                <h5 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#10b981', marginBottom: '1rem', textAlign: 'center' }}>
                  NOW: The AI Approach
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <h6 style={{ fontWeight: '600', color: '#1f2937' }}>Learned Perception</h6>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      AI is not bound by rules. It learns to recognize the unique sonic "fingerprint" of a voice, no matter how it's mixed.
                    </p>
                  </div>
                  <div>
                    <h6 style={{ fontWeight: '600', color: '#1f2937' }}>Intelligent Reconstruction</h6>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      AI doesn't just filter; it creates a high-fidelity reconstruction of the sound based on its extensive training.
                    </p>
                  </div>
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                    <strong style={{ color: '#059669' }}>Core Advantage:</strong> Flexible, powerful, and continuously improving. It adapts to the music, not the other way around.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
                Your Personal Remixing Studio
              </h4>
              <p style={{ color: '#6b7280' }}>
                This technology is now available in powerful, user-friendly applications. Click on a tool in the chart to learn more.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              <div className="guide-card">
                <div className="chart-container">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
              
              <div className="guide-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h5 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937' }}>
                  {selectedTool !== null ? toolData[selectedTool].name : 'Select a tool...'}
                </h5>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                  {selectedTool !== null ? toolData[selectedTool].useCase : 'Click on a bar in the chart to see details about each popular separation tool.'}
                </p>
                {selectedTool !== null && (
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p><strong style={{ color: '#374151' }}>Cost Model:</strong> {toolData[selectedTool].cost}</p>
                    <p><strong style={{ color: '#374151' }}>Key Feature:</strong> {toolData[selectedTool].feature}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Future Tab */}
        {activeTab === 'future' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
                Ghosts in the Machine & What's Next
              </h4>
              <p style={{ color: '#6b7280' }}>
                AI is not perfect, and researchers are pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div className="guide-card">
                <h5 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Limitation: Artifacts</h5>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  Faint, watery, or sizzling sounds left behind when the AI struggles to separate overlapping "fingerprints." The quality of the source audio ("Garbage In, Garbage Out") is critical.
                </p>
              </div>
              
              <div className="guide-card">
                <h5 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Challenge: The Cocktail Party Problem</h5>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  Isolating a single voice in a room full of people talking is the next great hurdle. This requires a level of contextual understanding that current models lack.
                </p>
              </div>
              
              <div className="guide-card">
                <h5 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Solution: Multimodal & LASS</h5>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  Future AIs may use video (lip-reading) to help separate audio. Users may one day simply type commands like, "Isolate the bassline in the chorus."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Research: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '40px 0 30px 0' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="page-title">AI Music Research</h1>
            <p className="page-subtitle">
              Exploring the intersection of artificial intelligence and music to create tools that enhance 
              human creativity and make music more accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section style={{ padding: '20px 0 40px 0' }}>
        <div className="container">
          <h2 className="text-center mb-2">Featured Research</h2>
          
          <div className="card" style={{ marginBottom: '1rem' }}>
            <div className="card-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: '#007aff', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="#ffffff"/>
                    <path d="M19 10V12C19 16.4 15.4 20 11 20H13C17.4 20 21 16.4 21 12V10H19Z" fill="#ffffff"/>
                    <path d="M5 10V12C5 16.4 8.6 20 13 20H11C6.6 20 3 16.4 3 12V10H5Z" fill="#ffffff"/>
                    <path d="M12 20V24" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M8 24H16" stroke="#ffffff" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>Voice Separation Technology</h3>
                  <div className="text-small" style={{ color: '#007aff' }}>
                    Status: In Active Development
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-content">
              <p>
                My primary research focus is developing AI-powered tools to separate vocals from background music. 
                This technology enables singers and musicians to practice with cleaner backing tracks, create 
                karaoke versions of songs, and analyze musical arrangements more effectively.
              </p>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4>Key Features:</h4>
                <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <li>Real-time voice separation using deep learning models</li>
                  <li>Preservation of audio quality during separation process</li>
                  <li>Support for various audio formats and sample rates</li>
                  <li>User-friendly interface for non-technical users</li>
                </ul>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4>Applications:</h4>
                <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <li>Practice tool for singers and vocalists</li>
                  <li>Music education and analysis</li>
                  <li>Content creation for covers and remixes</li>
                  <li>Audio restoration and enhancement</li>
                </ul>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#1d1d1f', marginBottom: '0.5rem' }}>Research Paper:</h4>
                <p style={{ marginBottom: '1rem', color: '#333' }}>
                  Read our detailed technical paper explaining the U-Net architecture for voice separation.
                </p>
                <a 
                  href="/documents/ai_voice_separation_explained.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#007aff',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  AI Voice Separation using U-Net Explained
                </a>
                <span style={{ color: '#666', fontSize: '14px', marginLeft: '8px' }}>(paper)</span>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#1d1d1f', marginBottom: '0.5rem' }}>Research Podcast:</h4>
                <p style={{ marginBottom: '1rem', color: '#333' }}>
                  Listen to our in-depth discussion about AI voice separation technology and its applications.
                </p>
                <a 
                  href="/documents/ai_voice_separation_podcast.mp3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#007aff',
                    textDecoration: 'none',
                    fontWeight: '500',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                  AI Voice Separation Podcast
                </a>
                <span style={{ color: '#666', fontSize: '14px', marginLeft: '8px' }}>(audio)</span>
              </div>
              
              {/* Embedded Interactive Guide */}
              <InteractiveGuide />
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#1d1d1f', marginBottom: '0.5rem' }}>Try the Prototype:</h4>
                <p style={{ marginBottom: '1rem', color: '#333' }}>
                  Experience our voice separation technology in action with our interactive prototype.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '0.75rem', 
                  alignItems: 'stretch', 
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="https://voice-splitter-755776231771.us-central1.run.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ 
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0',
                      padding: '12px 20px',
                      fontSize: '15px',
                      fontWeight: '500',
                      flex: '1 1 auto',
                      minWidth: '200px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Launch Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px', display: 'inline-block', flexShrink: 0 }}>
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a 
                    href="/donate"
                    className="btn btn-secondary"
                    style={{ 
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0',
                      padding: '12px 20px',
                      fontSize: '15px',
                      fontWeight: '500',
                      flex: '1 1 auto',
                      minWidth: '180px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', display: 'inline-block', flexShrink: 0 }}>
                      <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.5H7.5A5.5 5.5 0 0 0 2 8V16A5.5 5.5 0 0 0 7.5 21.5H16.5A5.5 5.5 0 0 0 22 16V8A5.41 5.41 0 0 0 20.84 4.61Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.5H7.5A5.5 5.5 0 0 0 2 8V16A5.5 5.5 0 0 0 7.5 21.5H16.5A5.5 5.5 0 0 0 22 16V8A5.41 5.41 0 0 0 20.84 4.61Z" fill="none"/>
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Support This Research
                  </a>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
                  Help fund continued development of AI music separation technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '32px' }}>Research Areas</h2>
          
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M14.5 4L20.5 10L14.5 16" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M9.5 4L3.5 10L9.5 16" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M6 18L18 6" stroke="#000000" strokeWidth="1.5"/>
                    <circle cx="12" cy="3" r="1" fill="#000000"/>
                    <circle cx="12" cy="12" r="1" fill="#000000"/>
                    <circle cx="12" cy="21" r="1" fill="#000000"/>
                    <path d="M12 2V4" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M12 20V22" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  AI-Assisted Composition
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Developing tools that help composers create accompaniments, suggest chord progressions, 
                  and generate musical ideas while maintaining the human element in creative decision-making.
                </p>
                <div className="text-small" style={{ color: '#666', marginTop: '1rem' }}>
                  Research Phase • Machine Learning • Music Theory
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M2 12L6 8L6 16L2 12Z" fill="#000000"/>
                    <path d="M6 12L10 8L10 16L6 12Z" fill="#000000"/>
                    <path d="M10 12L14 6L14 18L10 12Z" fill="#000000"/>
                    <path d="M14 12L18 4L18 20L14 12Z" fill="#000000"/>
                    <path d="M18 12L22 2L22 22L18 12Z" fill="#000000"/>
                    <circle cx="12" cy="12" r="1" fill="#ffffff"/>
                  </svg>
                  Audio Signal Processing
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Exploring advanced signal processing techniques for music analysis, including pitch detection, 
                  tempo estimation, and harmonic analysis using modern deep learning approaches.
                </p>
                <div className="text-small" style={{ color: '#666', marginTop: '1rem' }}>
                  Active Research • DSP • Neural Networks
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M8 21L12 17L16 21" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M12 17V21" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M7 7H17" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M9 10H15" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M10 13H14" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  Intelligent Music Education
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Creating AI-powered learning systems that adapt to individual learning styles and provide 
                  personalized feedback for music students and self-learners.
                </p>
                <div className="text-small" style={{ color: '#666', marginTop: '1rem' }}>
                  Planning Phase • Educational Technology • Adaptive Learning
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="6" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="2" fill="#000000"/>
                    <path d="M12 2L12 4" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M12 20L12 22" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M2 12L4 12" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M20 12L22 12" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  Performance Analysis
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Developing tools to analyze musical performances, providing insights into timing, pitch accuracy, 
                  and expression to help musicians improve their craft.
                </p>
                <div className="text-small" style={{ color: '#666', marginTop: '1rem' }}>
                  Conceptual • Audio Analysis • Performance Metrics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '32px' }}>Technical Approach</h2>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="#000000"/>
                    <rect x="4" y="8" width="16" height="8" rx="2" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M8 12H16" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M8 14H12" stroke="#000000" strokeWidth="1.5"/>
                    <circle cx="6" cy="18" r="2" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <circle cx="18" cy="18" r="2" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M6 16V18" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M18 16V18" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  Deep Learning
                </h4>
              </div>
              
              <div className="card-content">
                <p>
                  Utilizing state-of-the-art neural network architectures including transformer models, 
                  convolutional networks, and generative adversarial networks for music processing tasks.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M16 21V19C16 17.9 15.1 17 14 17H5C3.9 17 3 17.9 3 19V21" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <circle cx="8.5" cy="7" r="4" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M20 8V14" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M23 11H17" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  Audio Processing
                </h4>
              </div>
              <div className="card-content">
                <p>
                  Implementing advanced digital signal processing techniques, spectral analysis, and 
                  time-frequency representations for high-quality audio manipulation.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <circle cx="6" cy="17" r="2" fill="#000000"/>
                    <circle cx="18" cy="11" r="2" fill="#000000"/>
                    <circle cx="14" cy="15" r="2" fill="#000000"/>
                    <path d="M8 17V7L20 5V11" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M16 15V8" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M2 5H6" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M3 8H5" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M2 11H6" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M3 14H5" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  Music Theory Integration
                </h4>
              </div>
              <div className="card-content">
                <p>
                  Combining AI capabilities with deep understanding of music theory, ensuring that 
                  technological solutions respect and enhance musical principles.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M16 21V19C16 17.9 15.1 17 14 17H5C3.9 17 3 17.9 3 19V21" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <circle cx="8.5" cy="7" r="4" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    <path d="M20 8V14" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M23 11H17" stroke="#000000" strokeWidth="1.5"/>
                  </svg>
                  User-Centered Design
                </h4>
              </div>
              <div className="card-content">
                <p>
                  Developing interfaces and tools that are accessible to musicians of all technical 
                  backgrounds, prioritizing usability and musical workflow integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '50px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '16px' }}>Future Directions</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto 40px auto', fontSize: '24px', fontWeight: 400 }}>
            My research is continuously evolving, driven by new discoveries in AI and the ever-changing needs 
            of the music community. Future work will focus on real-time applications, collaborative AI systems, 
            and expanding accessibility to underserved communities.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <a href="#" className="btn btn-primary" style={{
              flex: '1 1 auto',
              minWidth: '160px',
              textAlign: 'center',
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Collaborate with Me
            </a>
            <a href="#" className="btn btn-secondary" style={{ 
              borderColor: 'white', 
              color: 'white',
              flex: '1 1 auto',
              minWidth: '160px',
              textAlign: 'center',
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              View Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research; 