import React, { useState } from 'react';

interface ProfilePhotoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size = 'medium', className = '' }) => {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    small: 'profile-photo-small',
    medium: 'profile-photo-medium',
    large: 'profile-photo-large'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderFallbackSVG = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#000000" />
      <circle cx="50" cy="35" r="15" fill="#ffffff" />
      <ellipse cx="50" cy="75" rx="25" ry="15" fill="#ffffff" />
    </svg>
  );

  return (
    <div className={`profile-photo ${sizeClasses[size]} ${className}`}>
      <div className="profile-photo-placeholder">
        {!imageError ? (
          <img
            src="/images/profile.png"
            alt="Profile"
            onError={handleImageError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        ) : (
          renderFallbackSVG()
        )}
      </div>
    </div>
  );
};

export default ProfilePhoto; 