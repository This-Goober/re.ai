import React, { useState, useEffect, useCallback } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoSlide?: boolean;
  slideInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = true,
  slideInterval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, nextSlide]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`image-carousel ${className}`}>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div 
            className="carousel-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="carousel-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {image.title && (
                  <div className="carousel-caption">
                    <h3>{image.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showArrows && images.length > 1 && (
          <>
            <button 
              className="carousel-arrow carousel-arrow-left"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="carousel-arrow carousel-arrow-right"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {showDots && images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
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

export default ImageCarousel; 