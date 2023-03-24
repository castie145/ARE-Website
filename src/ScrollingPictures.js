import React, { useState, useEffect } from 'react';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.jpg';

function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % 12);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [currentImageIndex]);
  
    return (
      <div className="image-container">
        <img src={currentImageIndex === 0 ? image1 : currentImageIndex === 1 ? image2 : currentImageIndex === 2 ? image3 : currentImageIndex === 3 ? image4 : currentImageIndex === 4 ? image5 : currentImageIndex === 5 ? image6 : currentImageIndex === 6 ? image7 : currentImageIndex === 7 ? image8 :currentImageIndex === 8 ? image9 : currentImageIndex === 9 ? image10 : currentImageIndex === 10 ? image11 : image12 } alt="Image" />
         {/* <img src={`image${currentIndex}.jpg`} alt={`image ${currentIndex}`} /> */}
      </div>
    );
  }
  
  export default ImageSlider;
  
  
  
 