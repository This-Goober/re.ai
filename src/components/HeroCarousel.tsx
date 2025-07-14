import React, { useState, useEffect, useCallback } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  isVideo?: boolean;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  autoSlide?: boolean;
  slideInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  children?: React.ReactNode;
  parallaxOffset?: number;
}

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return match[2];
  }
  
  return '';
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  autoSlide = true,
  slideInterval = 5000,
  showDots = true,
  showArrows = true,
  children,
  parallaxOffset = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, nextSlide]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="hero-carousel">
      <div className="hero-carousel-container">
        <div 
          className="hero-carousel-wrapper"
        >
          <div 
            className="hero-carousel-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="hero-carousel-slide">
                {image.isVideo ? (
                  <div className="hero-carousel-video-container">
                    <YouTube
                      videoId={getYouTubeVideoId(image.src)}
                      className="hero-carousel-video"
                      opts={{
                        height: '100%',
                        width: '100%',
                        playerVars: {
                          autoplay: 1,
                          controls: 1,
                          rel: 0,
                          showinfo: 0,
                          modestbranding: 1,
                          playsinline: 1,
                          fs: 1, // Enable fullscreen button
                          iv_load_policy: 3 // Hide video annotations
                        },
                      }}
                      onReady={(event: YouTubeEvent) => {
                        // Force play when ready and store player reference
                        if (index === currentIndex) {
                          event.target.playVideo();
                          // Set volume to 50% (0-100)
                          event.target.setVolume(50);
                          // Unmute the video
                          event.target.unMute();
                        }
                      }}
                      onStateChange={(event: YouTubeEvent) => {
                        // Ensure video plays when it becomes active
                        if (index === currentIndex && event.data === YouTube.PlayerState.CUED) {
                          event.target.playVideo();
                          // Unmute the video
                          event.target.unMute();
                        }
                      }}
                      onPlay={(event: YouTubeEvent) => {
                        // Ensure video is unmuted when played
                        event.target.unMute();
                      }}
                    />
                  </div>
                ) : (
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="hero-carousel-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                )}
                {!image.isVideo && <div className="hero-carousel-overlay"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Content overlay */}
        <div className="hero-carousel-content">
          {children}
        </div>

        {showArrows && images.length > 1 && (
          <>
            <button 
              className="hero-carousel-arrow hero-carousel-arrow-left"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="hero-carousel-arrow hero-carousel-arrow-right"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {showDots && images.length > 1 && (
          <div className="hero-carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`hero-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroCarousel; 