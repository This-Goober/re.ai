import React from 'react';

// Stripe Payment Link (test version)
const STRIPE_PAYMENT_LINK = 'https://donate.stripe.com/9B68wP1nv7GPdSc6pz5EY00';

const Donate: React.FC = () => {
  const handleDonateClick = () => {
    window.open(STRIPE_PAYMENT_LINK, '_blank');
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '40px 0 30px 0' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="page-title">Support AI Music for Everyone</h1>
            <p className="page-subtitle">
              I'm a 16-year-old violinist working to make AI music technology accessible to all musicians. 
              Talent is everywhere, but access is not universal. Help me change that.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section style={{ padding: '20px 0 40px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Democratizing Music Technology</h2>
                <p style={{ color: '#666', marginTop: '0.5rem' }}>
                  Help support the development of AI music tools that everyone can access, regardless of their background
                </p>
              </div>
              
              <div className="card-content">
                {/* Mission */}
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1.5rem', color: '#1d1d1f', fontSize: '20px', fontWeight: '600' }}>Our Mission</h4>
                  <p style={{ margin: '0 0 1rem 0', color: '#333', fontSize: '16px', lineHeight: '1.6' }}>
                    As a musician, I've seen firsthand how expensive professional music tools can be. Many talented 
                    artists simply can't afford the software and technology that could elevate their music. 
                  </p>
                  <p style={{ margin: '0', color: '#333', fontSize: '16px', lineHeight: '1.6' }}>
                    Your donations help fund the development of AI-powered music technology that breaks down these barriers, 
                    creating tools that are powerful, accessible, and free for musicians worldwide.
                  </p>
                </div>

                {/* What We're Building */}
                <div style={{ 
                  backgroundColor: '#fff9e6', 
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1d1d1f', fontSize: '18px', fontWeight: '600' }}>What We're Building:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '15px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', marginTop: '2px', color: '#f59e0b', flexShrink: 0 }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>AI tools for voice and instrument separation that rival expensive commercial software</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '15px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', marginTop: '2px', color: '#f59e0b', flexShrink: 0 }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Music education platforms that adapt to different learning styles and skill levels</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '15px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', marginTop: '2px', color: '#f59e0b', flexShrink: 0 }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Creative composition aids that help musicians explore new ideas and arrangements</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '15px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', marginTop: '2px', color: '#f59e0b', flexShrink: 0 }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Performance analysis tools that provide personalized feedback for improvement</span>
                    </li>
                  </ul>
                </div>

                {/* Impact */}
                <div style={{ 
                  backgroundColor: '#f0f8ff', 
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1d1d1f', fontSize: '18px', fontWeight: '600' }}>The Vision</h4>
                  <p style={{ margin: '0', color: '#333', fontSize: '15px', lineHeight: '1.6' }}>
                    Imagine a world where a talented musician in any part of the globe can access the same 
                    high-quality AI music tools as someone in a major recording studio. Where students can 
                    learn with personalized AI tutors, and where creativity isn't limited by what you can afford. 
                    That's the future we're building together.
                  </p>
                </div>

                {/* Donation Button */}
                <button
                  onClick={handleDonateClick}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.5H7.5A5.5 5.5 0 0 0 2 8V16A5.5 5.5 0 0 0 7.5 21.5H16.5A5.5 5.5 0 0 0 22 16V8A5.41 5.41 0 0 0 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Donate Now
                </button>

                {/* Security Notice */}
                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1rem', 
                  backgroundColor: '#f0f8ff', 
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#666',
                  textAlign: 'center'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', marginRight: '4px' }}>
                    <path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Secure payments processed through Stripe. Your information is always protected.
                </div>

                {/* Additional Information */}
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  <strong>How it works:</strong> Your donation goes directly toward funding development, research, 
                  and maintaining these tools as free resources for the global music community. Every contribution, 
                  no matter the size, helps us get closer to universal access to AI music technology.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem', fontSize: '32px', fontWeight: '600' }}>Music Knows No Boundaries</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
            As musicians, we understand that creativity and talent exist everywhere, but opportunity does not. 
            Your support helps level the playing field, giving artists around the world access to tools that 
            were once only available to those with significant resources. Together, we're building a more 
            equitable future for music creation and education.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#007aff', fontSize: '16px', fontWeight: '500' }}>
              Thank you for supporting accessible music technology for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate; 