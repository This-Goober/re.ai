import React from 'react';

const Learning: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section-large">
        <div className="container">
          <div className="text-center mb-2">
            <h1>Violin Learning & Education</h1>
            <p className="text-large">
              Sharing knowledge and insights gained from years of study with world-class violinists and teachers,
              making advanced violin techniques accessible to all learners. My mission is to democratize access to
              high-quality violin education and share the wisdom I've been fortunate to receive throughout my musical journey.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-2">Learning Philosophy</h2>
          
          <div className="card-grid">
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
                  Focused Practice
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Quality over quantity. Every practice session should have clear goals and measurable outcomes. 
                  Learn how to identify weak spots and develop targeted exercises to address them effectively.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M9 9L15 15" stroke="#000000" stroke-width="1.5"/>
                    <path d="M15 9L9 15" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 2V6" stroke="#000000" stroke-width="1.5"/>
                    <path d="M12 18V22" stroke="#000000" stroke-width="1.5"/>
                    <path d="M4.93 4.93L7.76 7.76" stroke="#000000" stroke-width="1.5"/>
                    <path d="M16.24 16.24L19.07 19.07" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Musical Understanding
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Technical proficiency must be paired with musical intelligence. Understanding the composer's 
                  intent, historical context, and emotional content elevates performance from mere execution to artistry.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M3 12L7 8L7 11H17V13H7L7 16L3 12Z" fill="#000000"/>
                    <path d="M21 12L17 16L17 13H7V11H17L17 8L21 12Z" fill="#000000"/>
                    <path d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                  </svg>
                  Progressive Development
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Building technique systematically, from fundamental bowing and fingering to advanced concepts 
                  like double stops, harmonics, and extended techniques required for challenging repertoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Classes */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-2">Master Class Series</h2>
          <p className="text-center mb-2">
            Deep dives into some of the most challenging and rewarding pieces in the violin repertoire.
          </p>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M2 4L22 4" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 8L22 8" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 12L22 12" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 16L22 16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 20L22 20" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="5" cy="6" r="1.5" fill="#000000"/>
                    <circle cx="9" cy="10" r="1.5" fill="#000000"/>
                    <circle cx="13" cy="6" r="1.5" fill="#000000"/>
                    <circle cx="17" cy="14" r="1.5" fill="#000000"/>
                    <circle cx="21" cy="10" r="1.5" fill="#000000"/>
                    <path d="M5 6V12" stroke="#000000" stroke-width="1.5"/>
                    <path d="M17 14V8" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Bach Sonatas & Partitas
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Unaccompanied Bach represents the pinnacle of violin literature. Learn about phrasing, 
                  voice leading, and the unique challenges of performing polyphonic music on a single instrument.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <h4>Key Topics:</h4>
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <li>Bow distribution and voice separation</li>
                    <li>Fingering choices for polyphonic passages</li>
                    <li>Historical performance practice</li>
                    <li>Memorization techniques for complex works</li>
                  </ul>
                </div>
                <div className="text-small" style={{ color: '#007aff', marginTop: '1rem' }}>
                  Coming Soon
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2L13.5 8.5L20 9L14.5 14L16 21L12 18L8 21L9.5 14L4 9L10.5 8.5L12 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 6V10" stroke="#000000" stroke-width="1.5"/>
                    <path d="M12 14V16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M10 12H14" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Paganini Caprices
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  The ultimate test of violin technique. These pieces push the boundaries of what's possible 
                  on the instrument and require mastery of advanced techniques and mental preparation.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <h4>Key Topics:</h4>
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <li>Left-hand pizzicato and harmonics</li>
                    <li>Rapid string crossings and arpeggios</li>
                    <li>Mental preparation for technical challenges</li>
                    <li>Practice strategies for difficult passages</li>
                  </ul>
                </div>
                <div className="text-small" style={{ color: '#007aff', marginTop: '1rem' }}>
                  In Development
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M3 17L12 22L21 17" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M3 12L12 17L21 12" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 2V7" stroke="#000000" stroke-width="1.5"/>
                    <path d="M12 12V17" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="12" cy="7" r="1" fill="#000000"/>
                    <circle cx="12" cy="12" r="1" fill="#000000"/>
                    <circle cx="12" cy="17" r="1" fill="#000000"/>
                  </svg>
                  Romantic Concertos
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Exploring the great violin concertos of the Romantic era, focusing on musical expression, 
                  orchestral awareness, and the balance between technical display and emotional communication.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <h4>Key Topics:</h4>
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <li>Phrasing and musical line</li>
                    <li>Cadenza preparation and interpretation</li>
                    <li>Working with orchestral reductions</li>
                    <li>Stage presence and performance psychology</li>
                  </ul>
                </div>
                <div className="text-small" style={{ color: '#007aff', marginTop: '1rem' }}>
                  Planned
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-2">Learning Resources</h2>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M8 6H16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M8 10H16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M8 14H12" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Study Guides
                </h4>
              </div>
              
              <div className="card-content">
                <p>
                  Comprehensive guides breaking down complex pieces into manageable sections, with practice 
                  suggestions and technical insights from professional instruction.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M23 7L16 12L23 17V7Z" fill="#000000"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M5 9L9 12L5 15V9Z" fill="#000000"/>
                  </svg>
                  Video Tutorials
                </h4>
              </div>
              
              <div className="card-content">
                <p>
                  Step-by-step video demonstrations of difficult passages, proper technique, and musical 
                  interpretation to complement written materials.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M9 18V5L21 3V16" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="6" cy="18" r="3" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="18" cy="16" r="3" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M2 2L4 4L2 6" stroke="#000000" stroke-width="1.5"/>
                    <path d="M2 10L4 12L2 14" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Practice Tracks
                </h4>
              </div>
              
              <div className="card-content">
                <p>
                  AI-generated backing tracks and practice accompaniments to help students work on ensemble 
                  playing and musical timing in solo practice.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M14 2V8H20" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M16 13H8" stroke="#000000" stroke-width="1.5"/>
                    <path d="M16 17H8" stroke="#000000" stroke-width="1.5"/>
                    <path d="M10 9H8" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Interactive Exercises
                </h4>
              </div>
              
              <div className="card-content">
                <p>
                  Customizable practice routines and exercises that adapt to individual learning pace and 
                  focus areas, powered by intelligent learning algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-2">Teaching Approach</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lessons Shaped by Masters</h3>
              </div>
              
              <div className="card-content">
                <p>
                  My approach to teaching comes from the rare opportunity I've had to study with some of the world's best violinists and teachers — from learning under <strong>Professor Ron Patterson</strong> (a student of Jascha Heifetz) to working with <strong>James Ehnes</strong> through the SCMS masterclasses, and training under the guidance of <strong>Simon James</strong>, one of the finest violin mentors in the Pacific Northwest.
                </p>
                <p>
                  I've been incredibly fortunate that my family believed in investing in my musical journey, and I know not everyone has that chance. That's why I'm building this website — to share the wisdom, methods, and inspiration I've received, and make violin learning more open to everyone, anywhere.
                </p>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <h4>Core Principles:</h4>
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <li><strong>Patient Progression:</strong> Mastering the violin takes time — I focus on building strong fundamentals step by step.</li>
                    <li><strong>Musical Purpose:</strong> Every scale and exercise connects to real music — not just technique for technique's sake.</li>
                    <li><strong>Individual Fit:</strong> Every student is unique — I adapt what I've learned so it fits <em>you</em>.</li>
                    <li><strong>Performance Readiness:</strong> Learning to play beautifully means preparing your mind as much as your fingers.</li>
                  </ul>
                </div>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <h4>What Makes This Different:</h4>
                  <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <li><strong>Direct Line to World-Class Teaching:</strong> I distill lessons and insights from premium, professional-level training so you can access them freely.</li>
                    <li><strong>Mastering the Tough Stuff:</strong> I tackle the hardest parts of violin playing with clear explanations and personal tips.</li>
                    <li><strong>Powered by Modern Tools:</strong> I'm using AI and interactive coding tools to build lessons that reach more people, in more ways.</li>
                    <li><strong>Learn by Sharing:</strong> I truly believe that teaching is the best way to learn — so let's learn together.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-large" style={{ backgroundColor: '#007aff', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Start Your Journey</h2>
          <p className="text-large" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Whether you're preparing for auditions, working on challenging repertoire, or simply wanting to 
            deepen your musical understanding, these resources are designed to help you reach your goals.
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <a href="#" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#007aff' }}>
              Browse Resources
            </a>
            <a href="#" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              Get Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning; 