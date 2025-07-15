import React from 'react';

// Stripe Payment Link (test version)
const STRIPE_PAYMENT_LINK = 'https://donate.stripe.com/test_14AdR91p16qa4q8dePcfK00';

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
            <h1 className="page-title">Support Our Research</h1>
            <p className="page-subtitle">
              Help advance AI music technology by supporting our research and development efforts.
              Your donation enables us to continue creating innovative tools for musicians and artists.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Make a Donation</h2>
                <p style={{ color: '#666', marginTop: '0.5rem' }}>
                  Support our AI music research with a secure donation
                </p>
              </div>
              
              <div className="card-content">
                {/* Impact Information */}
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  marginBottom: '2rem' 
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#333' }}>Your Impact:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#007aff' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Advance AI music separation technology
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#007aff' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Support open-source tools for musicians
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#007aff' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Fund research and development costs
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', color: '#007aff' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Make AI music tools more accessible
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
                  Secure payments powered by Stripe. You'll be redirected to our secure payment page.
                </div>

                {/* Additional Information */}
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  backgroundColor: '#fff9e6', 
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#8b7355'
                }}>
                  <strong>Note:</strong> Clicking "Donate Now" will open Stripe's secure payment page in a new tab where you can choose your donation amount and complete the transaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Thank You for Your Support</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Every donation, no matter the size, helps us continue our mission to advance AI music technology 
            and make innovative tools accessible to musicians worldwide. We are grateful for your support 
            in pushing the boundaries of what's possible in music technology.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate; 