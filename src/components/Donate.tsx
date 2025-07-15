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
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="page-title">Invest in the Future of AI Music Technology</h1>
            <p className="page-subtitle">
              Your contribution directly fuels groundbreaking research and development in artificial intelligence for music, 
              enabling us to build innovative tools that democratize music creation and enhance artistic expression worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Support Cutting-Edge Research</h2>
                <p style={{ color: '#666', marginTop: '0.5rem' }}>
                  Join our mission to advance AI music technology through strategic investment in research and development
                </p>
              </div>
              
              <div className="card-content">
                {/* Fund Allocation */}
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1.5rem', color: '#1d1d1f', fontSize: '20px', fontWeight: '600' }}>How Your Investment Makes an Impact:</h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ 
                        minWidth: '32px', 
                        height: '32px', 
                        backgroundColor: '#007aff', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="white"/>
                          <rect x="4" y="8" width="16" height="8" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                        </svg>
                      </div>
                      <div>
                        <h5 style={{ margin: '0 0 0.5rem 0', color: '#1d1d1f', fontSize: '16px', fontWeight: '600' }}>
                          Research & Development (60%)
                        </h5>
                        <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.4' }}>
                          Funding advanced AI model development, machine learning research, audio processing algorithms, 
                          and innovative music technology solutions.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ 
                        minWidth: '32px', 
                        height: '32px', 
                        backgroundColor: '#007aff', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M16 21V19C16 17.9 15.1 17 14 17H5C3.9 17 3 17.9 3 19V21" stroke="white" strokeWidth="1.5" fill="none"/>
                          <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
                          <path d="M20 8V14" stroke="white" strokeWidth="1.5"/>
                          <path d="M23 11H17" stroke="white" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <h5 style={{ margin: '0 0 0.5rem 0', color: '#1d1d1f', fontSize: '16px', fontWeight: '600' }}>
                          Technical Talent & Contractors (25%)
                        </h5>
                        <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.4' }}>
                          Compensating skilled engineers, researchers, and specialized contractors who contribute 
                          their expertise to advancing our AI music technology platform.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ 
                        minWidth: '32px', 
                        height: '32px', 
                        backgroundColor: '#007aff', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
                          <path d="M2 12H22" stroke="white" strokeWidth="1.5"/>
                          <path d="M12 2A15.3 15.3 0 0 1 19.4 7" stroke="white" strokeWidth="1.5"/>
                          <path d="M12 2A15.3 15.3 0 0 0 4.6 7" stroke="white" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <h5 style={{ margin: '0 0 0.5rem 0', color: '#1d1d1f', fontSize: '16px', fontWeight: '600' }}>
                          Infrastructure & Operations (15%)
                        </h5>
                        <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.4' }}>
                          Maintaining robust cloud infrastructure, backend services, website hosting, 
                          and computational resources required for AI model training and deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Outcomes */}
                <div style={{ 
                  backgroundColor: '#fff9e6', 
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1d1d1f', fontSize: '18px', fontWeight: '600' }}>Strategic Outcomes:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#f59e0b' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Accelerate breakthrough innovations in AI-powered music separation technology
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#f59e0b' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Expand accessibility of professional-grade music tools to independent artists
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#f59e0b' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Foster open-source development and knowledge sharing in AI music research
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#f59e0b' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Establish sustainable infrastructure for long-term innovation and community impact
                    </li>
                  </ul>
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
                  Invest in Innovation
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
                  Enterprise-grade security powered by Stripe. Your payment information is protected with bank-level encryption.
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
                  <strong>Investment Process:</strong> Clicking "Invest in Innovation" will securely redirect you to our Stripe payment portal where you can select your contribution amount and complete the transaction with confidence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem', fontSize: '32px', fontWeight: '600' }}>Empowering Innovation Through Partnership</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
            Your investment represents more than financial support—it's a partnership in shaping the future of music technology. 
            Together, we're building tools that will empower musicians, enhance creativity, and make professional-grade 
            AI music technology accessible to artists worldwide. Every contribution accelerates our mission to democratize 
            music creation through artificial intelligence.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#007aff', fontSize: '16px', fontWeight: '500' }}>
              Thank you for believing in the transformative power of AI music technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate; 