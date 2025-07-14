import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto';
import HeroCarousel from './HeroCarousel';

const Home: React.FC = () => {
  const homeImages = [
    {
      src: '/images/carousel/eidee_punting_king_college.jpeg',
      alt: 'Traveling the World',
      title: 'Visiting Historical Places'
    },
    {
      src: '/images/carousel/eidee_king_college_chapel.jpeg',
      alt: 'Violin Practice',
      title: 'Mastering Classical Music'
    },
    {
      src: '/images/carousel/eidee_king_college_backyard.jpeg',
      alt: 'AI Music Collaboration',
      title: 'AI × Music Innovation'
    }
  ];

  return (
    <div>
      {/* Hero Section with Full-Screen Carousel */}
      <HeroCarousel 
        images={homeImages}
        autoSlide={false}
        slideInterval={4000}
        showDots={true}
        showArrows={true}
      >
      </HeroCarousel>

      {/* Main Title and Description Section */}
      <section className="section">
        <div className="container text-center">
          <h1 className="page-title fade-in" style={{ marginBottom: '24px' }}>ré.ai</h1>
          <p className="page-subtitle fade-in" style={{ marginBottom: '32px' }}>
            Where Music Meets Artificial Intelligence
          </p>
          <p className="page-content fade-in" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Exploring the future of music creation, composition, and learning through the harmony of human creativity and AI innovation.
          </p>
          
          <div className="flex justify-center gap-1 mt-4">
            <Link to="/about" className="btn btn-primary">
              My Story
            </Link>
            <Link to="/research" className="btn btn-secondary">
              Explore Research
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '24px' }}>The Vision</h2>
            <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Music is the universal language that connects us all. When combined with AI, 
              it opens infinite possibilities for creation, learning, and expression.
            </p>
          </div>
          
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="#000000"/>
                    <path d="M8 6H7C5.9 6 5 6.9 5 8V16C5 17.1 5.9 18 7 18H8V20C8 21.1 8.9 22 10 22H14C15.1 22 16 21.1 16 20V18H17C18.1 18 19 17.1 19 16V8C19 6.9 18.1 6 17 6H16" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 8V14" stroke="#000000" stroke-width="1.5"/>
                    <path d="M9 11L15 11" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Musical Journey
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  At 16, I'm a passionate violinist with years of experience learning from 
                  a UW violin professor. Music has shaped my perspective on creativity, 
                  discipline, and the pursuit of excellence.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="#000000"/>
                    <rect x="4" y="8" width="16" height="8" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M8 12H16" stroke="#000000" stroke-width="1.5"/>
                    <path d="M8 14H12" stroke="#000000" stroke-width="1.5"/>
                    <circle cx="6" cy="18" r="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <circle cx="18" cy="18" r="2" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M6 16V18" stroke="#000000" stroke-width="1.5"/>
                    <path d="M18 16V18" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  AI Innovation
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  I believe in the power of human + AI collaboration. My research focuses 
                  on making music more accessible through AI-powered tools for composition, 
                  learning, and audio processing.
                </p>
                <Link to="/research" className="btn btn-primary">
                  View Research
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px'}}>
                    <path d="M3 13H21L18 8H6L3 13Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M3 13V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M12 8L10 3H14L12 8Z" stroke="#000000" stroke-width="1.5" fill="none"/>
                    <path d="M9 16H15" stroke="#000000" stroke-width="1.5"/>
                  </svg>
                  Knowledge Sharing
                </h3>
              </div>
              
              <div className="card-content">
                <p>
                  Learning from an exceptional professor has given me insights into mastering 
                  complex pieces. I want to share these learnings and make violin education 
                  more accessible to everyone.
                </p>
                <Link to="/learning" className="btn btn-primary">
                  Explore Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '24px' }}>Current Projects</h2>
            <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Here are some of the exciting projects I'm working on to bridge music and AI.
            </p>
          </div>
          
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Voice Separation Technology</h4>
              </div>
              
              <div className="card-content">
                <p>
                  Developing AI tools to separate vocals from background music, enabling 
                  better practice sessions for singers and musicians.
                </p>
                <div className="text-small" style={{ color: '#007aff' }}>
                  Status: In Development
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">AI-Powered Music Composition</h4>
              </div>
              
              <div className="card-content">
                <p>
                  Exploring how AI can assist composers in creating accompaniments and 
                  suggesting harmonic progressions while preserving human creativity.
                </p>
                <div className="text-small" style={{ color: '#007aff' }}>
                  Status: Research Phase
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Interactive Violin Learning</h4>
              </div>
              
              <div className="card-content">
                <p>
                  Creating educational content and tools to help violinists master 
                  challenging pieces like Paganini caprices and Bach sonatas.
                </p>
                <div className="text-small" style={{ color: '#007aff' }}>
                  Status: Planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 