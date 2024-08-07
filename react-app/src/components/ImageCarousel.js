import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showNextImage, setShowNextImage] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setShowNextImage(true);
      setTimeout(() => {
        setImageIndex(index => (index === imageUrls.length - 1 ? 0 : index + 1));
        setAnimate(false);
      }, 2000); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="relative w-1/2 h-96 overflow-hidden">
        <img
          src={imageUrls[imageIndex]}
          alt="carousel"
          className={'absolute top-0 left-0 w-full h-full object-cover rounded-lg'}
        />
        {showNextImage && (
          <img
            src={imageUrls[(imageIndex + 1) % imageUrls.length]}
            alt="carousel-next"
            className={`absolute top-0 left-full w-full h-full object-cover rounded-lg transition-transform duration-1000 ${animate ? 'transform -translate-x-full opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
