import React from 'react';

const Research: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section">
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
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-2">Featured Research</h2>
          
          <div className="card" style={{ marginBottom: '2rem' }}>
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
                    <path d="M12 20V24" stroke="#ffffff" stroke-width="1.5"/>
                    <path d="M8 24H16" stroke="#ffffff" stroke-width="1.5"/>
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
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>Research Areas</h2>
          
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M14.5 4L20.5 10L14.5 16" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M9.5 4L3.5 10L9.5 16" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M6 18L18 6" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="12" cy="3" r="1" fill="#000000"/>
                    <circle cx="12" cy="12" r="1" fill="#000000"/>
                    <circle cx="12" cy="21" r="1" fill="#000000"/>
                    <path d="M12 2V4" stroke="#000000" stroke-width="1.5"/>
                    <path d="M12 20V22" stroke="#000000" stroke-width="1.5"/>
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
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M8 21L12 17L16 21" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 17V21" stroke="#000000" stroke-width="1.5"/>
                    <path d="M7 7H17" stroke="#000000" stroke-width="1.5"/>
                    <path d="M9 10H15" stroke="#000000" stroke-width="1.5"/>
                    <path d="M10 13H14" stroke="#000000" stroke-width="1.5"/>
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
                    <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="6" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="2" fill="#000000"/>
                    <path d="M12 2L12 4" stroke="#000000" stroke-width="1.5"/>
                    <path d="M12 20L12 22" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 12L4 12" stroke="#000000" stroke-width="1.5"/>
                    <path d="M20 12L22 12" stroke="#000000" stroke-width="1.5"/>
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
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-2">Technical Approach</h2>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="#000000"/>
                    <rect x="4" y="8" width="16" height="8" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M8 12H16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M8 14H12" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="6" cy="18" r="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="18" cy="18" r="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M6 16V18" stroke="#000000" stroke-width="1.5"/>
                    <path d="M18 16V18" stroke="#000000" stroke-width="1.5"/>
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
                    <path d="M16 21V19C16 17.9 15.1 17 14 17H5C3.9 17 3 17.9 3 19V21" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="8.5" cy="7" r="4" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M20 8V14" stroke="#000000" stroke-width="1.5"/>
                    <path d="M23 11H17" stroke="#000000" stroke-width="1.5"/>
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
                    <path d="M8 17V7L20 5V11" stroke="#000000" stroke-width="1.5"/>
                    <path d="M16 15V8" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 5H6" stroke="#000000" stroke-width="1.5"/>
                    <path d="M3 8H5" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 11H6" stroke="#000000" stroke-width="1.5"/>
                    <path d="M3 14H5" stroke="#000000" stroke-width="1.5"/>
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
                    <path d="M16 21V19C16 17.9 15.1 17 14 17H5C3.9 17 3 17.9 3 19V21" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="8.5" cy="7" r="4" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M20 8V14" stroke="#000000" stroke-width="1.5"/>
                    <path d="M23 11H17" stroke="#000000" stroke-width="1.5"/>
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
      <section className="section" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '16px' }}>Future Directions</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', fontSize: '24px', fontWeight: 400, marginBottom: '40px' }}>
            My research is continuously evolving, driven by new discoveries in AI and the ever-changing needs 
            of the music community. Future work will focus on real-time applications, collaborative AI systems, 
            and expanding accessibility to underserved communities.
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <a href="#" className="btn btn-primary">
              Collaborate with Me
            </a>
            <a href="#" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              View Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research; 