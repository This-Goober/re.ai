import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import HeroCarousel from './HeroCarousel';
import ImageCarousel from './ImageCarousel';
import YouTube from 'react-youtube';

const About: React.FC = () => {
  // State for the video playlist
  const [currentVideoId, setCurrentVideoId] = React.useState("6iWMSTsgFd0");
  const [currentVideoTitle, setCurrentVideoTitle] = React.useState("Träumerei, \"Kinderszenen\" No. 7, Scenes from Childhood");
  const [currentVideoSubtitle, setCurrentVideoSubtitle] = React.useState("Performed at King College KCMS Spring 2025 recital");
  
  // Video playlist data
  const videoPlaylist = [
    {
      id: "6iWMSTsgFd0",
      title: "Träumerei, \"Kinderszenen\" No. 7, Scenes from Childhood",
      subtitle: "Performed at King College KCMS Spring 2025 recital"
    },
    {
      id: "1uHLAGlLv_E",
      title: "Smetana Piano Trio in G-minor (allegro)",
      subtitle: "Smetana LIVE @ Classical Seattle KING FM 98.1"
    },
    {
      id: "3r7EPt0A-g0",
      title: "Bruch Violin Concerto No. 1 in G-minor, Op. 26: Allegro moderato & Adagio",
      subtitle: "First Prize Winner for Charleston Internal Music and SYSO Concerto Competition 2023 violin category winner"
    },
    {
      id: "-lH19tyVUCk",
      title: "Meditation (Thais) J. Massenet",
      subtitle: "First Prize and Expressive Performance Special Prize winner awarded by UK International Music Competition"
    },
    {
      id: "RDyD5UP-pkQ",
      title: "J. S. Bach G-minor Sonata no. 1: adagio",
      subtitle: "Performing at Lutheran Church awarded Gold Medalist at Seattle Piano Competition 2022"
    },
    {
      id: "4o3lGdIEGL0",
      title: "Smetana Piano Trio in G-minor (allegro)",
      subtitle: "Performing at Benaroya Hall"
    },
    {
      id: "RCsJBv-tmbw",
      title: "Smetana Piano Trio in G-minor (finale)",
      subtitle: "Performing at Benaroya Hall"
    },
    {
      id: "6z_G9UorC84",
      title: "Shostakovich piano trio no. 2 in E Minor op. 67",
      subtitle: "Masterclass with Inon Barnatan"
    },
    {
      id: "PK8_9xeQ2To",
      title: "MENDELSSOHN Quartet No. 2 in A minor, Op. 13",
      subtitle: "Performing at CWU chamber musicstate competition"
    }
  ];
  
  // Function to change the current video
  const changeVideo = (video: { id: string, title: string, subtitle: string }) => {
    setCurrentVideoId(video.id);
    setCurrentVideoTitle(video.title);
    setCurrentVideoSubtitle(video.subtitle);
  };
  
  const aboutImages = [
    {
      src: '/images/carousel/eidee_scms_recital.jpeg',
      alt: 'Music Collaboration',
      title: 'Making Music Together'
    },
    {
      src: '/images/carousel/eidee_martin_trust_center_mit.jpeg',
      alt: 'Passion for Entrepreneurship and Innovation',
      title: 'Visiting the Martin Trust Center in MIT'
    },
    {
      src: '/images/carousel/eidee_mit_sloan.jpeg',
      alt: 'Passion for Entrepreneurship and Innovation',
      title: 'Visiting MIT Sloan'
    },
    {
      src: '/images/carousel/eidee_cambridge_punting.jpeg',
      alt: 'Enjoying the Cambridge Experience',
      title: 'Punting at Cambridge'
    },
    {
      src: '/images/carousel/eidee_bruch_2nd_mov_lutheran_church.jpeg',
      alt: 'Enjoying the Cambridge Experience',
      title: 'Punting at Cambridge'
    },
    {
      src: '/images/carousel/eidee_kcms_recital_2025.jpeg',
      alt: 'Invitation to Perform at King College',
      title: 'Invitation from KCMS'
    }
  ];

  return (
    <div>
      {/* Hero Section with Full-Screen Carousel */}
      <HeroCarousel 
        images={aboutImages}
        autoSlide={true}
        slideInterval={5000}
        showDots={true}
        showArrows={true}
      >
      </HeroCarousel>

      {/* Main Title and Description Section */}
      <section className="section">
        <div className="container text-center">
          <ProfilePhoto size="large" className="mb-4" />
          <h1 className="page-title">Hi, I'm Eidee Laurel Tan</h1>
          <p className="page-subtitle">
            A 16-year-old violinist with a passion for music and a curiosity about how AI can transform the way we create, learn, and experience music.
          </p>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section className="section" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>My Musical Journey</h2>
          </div>
          
          <div className="card-container">
                          <div className="card">
               <div className="card-header">
                 <h3 className="card-title">Early Beginnings</h3>
               </div>
               
               <div className="card-content">
                 <p>
                   My musical journey began at age 5 when I was first introduced to the violin. However, the tiny instrument didn't captivate me initially, so I chose to learn piano instead—a decision that kept me engrossed until age 11. My father, a Computer Scientist with a deep love for music, served as my guiding force into the captivating world of melodies and compositions.
                 </p>
               </div>
              </div>
            
                          <div className="card">
               <div className="card-header">
                 <h3 className="card-title">The Turning Point</h3>
               </div>
               
               <div className="card-content">
                 <p>
                   The pandemic year brought profound change to my musical pursuits. I found solace and inspiration in the TwoSet Violin YouTube channel. Clara-Jumi Kang's rendition of "Meditation" ignited a fiery determination within me. For months, I committed myself to relentless practice of this piece, culminating in my very first YouTube video recording—a life-altering moment.
                 </p>
               </div>
              </div>
            
                          <div className="card">
               <div className="card-header">
                 <h3 className="card-title">Finding My Mentors</h3>
               </div>
               
               <div className="card-content">
                 <p>
                   My YouTube video led me to Ronald Patterson, a distinguished Music Professor at the University of Washington. Through an audition video, I earned a coveted place in his private studio, where I've continued to nurture my violin skills under his expert guidance for the past three years. Through the SCMS pre-conservatory academy program, I've also had the privilege to learn from world-class artists including James Ehnes, Simon James, and Kevin Krentz, where I discovered the disciplines and rigors of world-class performing violin artistry.
                 </p>
               </div>
              </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <div className="text-center">
              <h3>Musical Growth & Repertoire</h3>
              <p className="text-large" style={{ maxWidth: '900px', margin: '0 auto' }}>
                Over the past three years, my repertoire has grown to include an impressive array of standard pieces and challenging compositions. I've conquered classics like "Meditation," Bach's "Sonata No. 1," Beethoven's "Romance in F," and Mozart's "Concerto No. 3." My musical journey has encompassed enchanting works of Kreisler, including "La Gitana" and "Sicilian and Rigaudon," as well as Paganini's virtuosic "No. 13 and 5," and the electrifying "Zigeuneurweisen."
              </p>
              <p className="text-large" style={{ maxWidth: '900px', margin: '1rem auto 0' }}>
                I've delved into chamber music, mastering pieces like Bella Bartok's "Romanian Folk Dances" and Rimsky-Korsakov's "Scheherazade." The challenge of concerto performances has been a highlight, with Bruch's "Concerto No. 1" and Wieniawski's "Concerto No. 2 in D-minor" pushing the boundaries of my skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accomplishments Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="text-center mb-2">
            <h2>Awards & Accomplishments</h2>
            <p className="text-large">
              Recognition for dedication, passion, and musical excellence across international competitions and local ensembles.
            </p>
          </div>
          
          <div className="card-grid">
          <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Charleston Music International Competition 2023</h4>
                 <div className="award-badge">
                   <strong>First Prize Winner - Romantic Music Category</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_bruch_lutheran_church_charleston_first_prize.jpeg',                     
                       alt: 'Performing Bruch Concerto at Charleston Competition',
                       title: 'Bruch Concerto Performance'
                     },
                     {
                       src: '/images/awards/eidee_bruch_lutheran_church_red.jpeg',
                       alt: 'Charleston Competition First Prize Trophy',
                       title: 'First Prize Trophy'
                     },
                     {
                       src: '/images/awards/eidee_charleston_medal.jpeg',
                       alt: 'Charleston Competition Award Ceremony',
                       title: 'Award Ceremony'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Performing Bruch Violin Concerto No. 1 (1st and 2nd movements)</p>
                 
                 <div className="card-links">
                   <a href="https://charlestoncompetition.com/performer-eidee-laurel-tan/" target="_blank" rel="noopener noreferrer" className="card-link" title="Performer Profile">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="10"/>
                       <path d="M2 12h20"/>
                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                     </svg>
                   </a>
                   <a href="https://www.youtube.com/watch?v=egkvTpfKoxA" target="_blank" rel="noopener noreferrer" className="card-link" title="Watch Performance">
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>

            <div className="card">
               <div className="card-header">
                 <h4 className="card-title">UK Music Competition 2023</h4>
                 <div className="award-badge">
                   <strong>Absolute First Prize & Expressive Performance Special Prize</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_meditation_lutheran_church.jpeg',
                       alt: 'Performing Meditation at UK International Competition',
                       title: 'Competition Performance'
                     },
                     {
                       src: '/images/awards/eidee_uk_competition_first_prize_certificate.jpeg',
                       alt: 'UK Competition Award Certificate',
                       title: 'Award Certificate'
                     },
                     {
                       src: '/images/awards/eidee_uk_competition_expressive_first_prize_certificate.jpeg',
                       alt: 'Backstage preparation for UK Competition',
                       title: 'Competition Preparation'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Young Artist Category (Age 14-17) for exceptional sensitivity and emotional depth performing Meditation (Thais) by J. Massenet</p>
                 
                 <div className="card-links">
                   <a href="https://www.ukmusiccompetition.com/results23s41" target="_blank" rel="noopener noreferrer" className="card-link" title="View Results">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="10"/>
                       <path d="M2 12h20"/>
                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                     </svg>
                   </a>
                   <a href="https://www.youtube.com/watch?v=-lH19tyVUCk" target="_blank" rel="noopener noreferrer" className="card-link" title="Watch Performance">
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
            
             <div className="card">
               <div className="card-header">
                 <h4 className="card-title">London Classical Music Competition 2023</h4>
                 <div className="award-badge">
                   <strong>Second Prize - Violin Youth Category</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_wieniawski_romance.jpeg',
                       alt: 'Performing Wieniawski at London Competition',
                       title: 'Wieniawski Performance'
                     },
                     {
                       src: '/images/awards/eidee_london_classical_second_prize_certificate.jpeg',
                       alt: 'London Competition Second Prize Award',
                       title: 'Second Prize Award'
                     },
                     {
                       src: '/images/awards/eidee_wieniawski_romance_second_prize_performance.jpeg',
                       alt: 'London Competition Concert Hall',
                       title: 'Competition Venue'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Wieniawski: Violin Concerto No. 2 in D Minor, Op. 22: II. Romance</p>
                 
                 <div className="card-links">
                   <a href="https://londonclassicalmusic.com/violin-youth-2023/" target="_blank" rel="noopener noreferrer" className="card-link" title="View Results">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="10"/>
                       <path d="M2 12h20"/>
                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                     </svg>
                   </a>
                   <a href="https://www.youtube.com/shorts/A7yPyyx3NWg" target="_blank" rel="noopener noreferrer" className="card-link" title="Watch Performance">
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
            
            <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Seattle Piano Competition 2022</h4>
                 <div className="award-badge">
                   <strong>Gold Medalist - Baroque Sonatas & Partitas</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_bach_sonata_one_lutheran_church.jpeg',
                       alt: 'Performing Bach Sonata at Seattle Competition',
                       title: 'Bach Sonata Performance'
                     },
                     {
                       src: '/images/awards/eidee_bach_sonata_one_gold_medal_certificate.jpeg',
                       alt: 'Seattle Competition Gold Medal',
                       title: 'Gold Medal Award'
                     },
                     {
                       src: '/images/awards/eidee_lutheran_church_bg_portrait.jpeg',
                       alt: 'Seattle Competition Performance Hall',
                       title: 'Competition Hall'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Age 14-18 Category performing Bach Sonata No. 1</p>
                 
                 <div className="card-links">
                   <a href="https://www.seattlepianocompetition.org/nw-festivals/winners/bach-22/" target="_blank" rel="noopener noreferrer" className="card-link" title="View Results">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="10"/>
                       <path d="M2 12h20"/>
                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                     </svg>
                   </a>
                   <a href="https://www.youtube.com/watch?v=RDyD5UP-pkQ&list=RDRDyD5UP-pkQ&start_radio=1" target="_blank" rel="noopener noreferrer" className="card-link" title="Watch Performance">
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
            
             <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Ensemble Leadership</h4>
                 <div className="award-badge">
                   <strong>Newport Senior High School Chamber Orchestra</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_national_orchestra_festival_newport.jpeg',
                       alt: 'Newport Orchestra at National Festival',
                       title: 'National Orchestra Festival'
                     },
                     {
                       src: '/images/awards/eidee_chamber_state_competition_standup.jpeg',
                       alt: 'Newport Chamber Quartet at State Finals',
                       title: 'Chamber State Finals Quartet Performance'
                     },
                     {
                       src: '/images/awards/eidee_chamber_state_competition_pose.jpeg',
                       alt: 'Newport Chamber Quartet at State Finals',
                       title: 'Team Pose'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Led chamber quartet to Washington state finals (Spring 2025) and contributed to the orchestra's third place finish at the 2025 National Orchestra Festival</p>
               </div>
             </div>
            
                                      <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Orchestra Achievements</h4>
                 <div className="award-badge">
                   <strong>Seattle Youth Symphony Orchestra (SYSO)</strong>
                 </div>
               </div>
               
               <div className="card-image">
                 <ImageCarousel 
                   images={[
                     {
                       src: '/images/awards/eidee_syso_concertmaster.jpeg',
                       alt: 'Serving as SYSO Concertmaster',
                       title: 'SYSO Concertmaster'
                     },
                     {
                       src: '/images/awards/eidee_syso_concerto_2023_2024_finalists.jpeg',
                       alt: 'SYSO Concerto Competition Winner',
                       title: 'Concerto Competition Win'
                     },
                     {
                       src: '/images/awards/eidee_benaroya_scms_performance_portrait.jpeg',
                       alt: 'Performing at Benaroya Hall',
                       title: 'SCMS Academy Program'
                     },
                     {
                      src: '/images/awards/eidee_scms_masterclass_with_james_ehnes.jpeg',
                      alt: 'SCMS Academy Masterclass with World-Class Artists',
                      title: 'SCMS Masterclass Program'
                     }
                   ]}
                   autoSlide={false}
                   showDots={true}
                   showArrows={false}
                 />
               </div>
               
               <div className="card-content">
                 <p className="performance-piece">Served as concertmaster and won the SYSO Concerto competition in 2023. Selected as one of 28 most talented musicians in the Seattle area for the SCMS pre-conservatory academy program, collaborating with world-class artists including James Ehnes, Simon James, and Rachell Lee Priday</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>My Philosophy</h2>
          </div>
          
          <div className="card-container">
            <p style={{ fontSize: '21px', fontWeight: 400, lineHeight: '1.5' }}>
              I believe technology should amplify human creativity, not replace it.
            </p>
          </div>
          
          <div className="card-grid">
                          <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Human + AI Collaboration</h4>
               </div>
               
               <div className="card-content">
                 <p>
                   AI should be our creative partner, helping us compose, learn, and explore musical possibilities 
                   we might never have discovered on our own. The goal is to enhance human musicality, not diminish it.
                 </p>
               </div>
              </div>
            
                          <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Accessibility Through Technology</h4>
               </div>
               
               <div className="card-content">
                 <p>
                   Not everyone has access to world-class music education. Through AI-powered tools and platforms, 
                   I want to democratize music learning and make high-quality instruction available to anyone 
                   with a desire to learn.
                 </p>
               </div>
              </div>
            
                          <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Research-Driven Innovation</h4>
               </div>
               
               <div className="card-content">
                 <p>
                   My approach is rooted in understanding both the technical aspects of AI and the nuanced 
                   requirements of musical expression. Every project I undertake is backed by research and 
                   real-world musical experience.
                 </p>
               </div>
              </div>
          </div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="section" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '16px' }}>My Mission</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="page-content">
                At 16, I'm just beginning my journey, but I already know that I want to make a meaningful 
                impact on the world through music and technology. Whether it's helping a student master 
                a difficult piece, enabling a composer to explore new creative territories, or simply 
                making music more accessible to everyone, I'm driven by the belief that technology can 
                be a force for musical good.
              </p>
              <p className="page-content">
                My goal is to bridge the gap between the timeless beauty of classical music and the 
                limitless potential of artificial intelligence. I want to create tools, share knowledge, 
                and inspire others to see music not just as entertainment, but as a powerful medium for 
                human expression and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Performances Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>Notable Performances</h2>
            <p className="page-subtitle">Selected recordings from my recent performances</p>
          </div>
          
          <div className="video-player-container">
            {/* Main Video Player */}
            <div className="main-video-container">
              <div className="video-title-container">
                <h3 className="video-title">{currentVideoTitle}</h3>
                <p className="video-subtitle">{currentVideoSubtitle}</p>
              </div>
              <div className="video-container">
                <YouTube
                  videoId={currentVideoId}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      controls: 1,
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0
                    },
                  }}
                />
              </div>
            </div>
            
            {/* Video Playlist */}
            <div className="video-playlist">
              <h3 className="playlist-title">Performance Playlist</h3>
              <div className="playlist-items">
                {videoPlaylist.map((video, index) => (
                  <div 
                    key={index} 
                    className={`playlist-item ${video.id === currentVideoId ? 'active' : ''}`}
                    onClick={() => changeVideo(video)}
                  >
                    <div className="playlist-item-thumbnail">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                        alt={video.title} 
                      />
                      <div className="play-icon">
                        {video.id === currentVideoId ? (
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="playlist-item-info">
                      <h4 className="playlist-item-title">{video.title}</h4>
                      <p className="playlist-item-subtitle">{video.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: '#007aff', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '16px' }}>Let's Connect</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '21px', fontWeight: 400, lineHeight: '1.5', marginBottom: '32px' }}>
            I'm always excited to connect with fellow musicians, researchers, and anyone passionate about 
            the intersection of music and technology.
          </p>
          
          {/* Social Media Links */}
          <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
            <a href="https://www.instagram.com/ilviolinolady" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'white', fontSize: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
              <svg viewBox="0 0 448 512" width="32" height="32" style={{ marginBottom: '8px' }}>
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <span style={{ fontSize: '14px' }}>@ilviolinolady</span>
            </a>
            <a href="https://www.youtube.com/@eideelaureltan/videos" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', fontSize: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
              <svg viewBox="0 0 576 512" width="32" height="32" style={{ marginBottom: '8px' }}>
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
              <span style={{ fontSize: '14px' }}>YouTube</span>
            </a>
            <a href="mailto:eideetan@gmail.com" 
               style={{ color: 'white', fontSize: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
              <svg viewBox="0 0 512 512" width="32" height="32" style={{ marginBottom: '8px' }}>
                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
              <span style={{ fontSize: '14px' }}>Email</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-1 mt-2">
            <a href="#" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#007aff' }}>
              Get in Touch
            </a>
            <a href="#" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 