import React, { useState, useEffect } from 'react';
// import ReactImageResizer from 'react-image-resizer';

import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import picture4 from './picture4.jpg';
import picture5 from './picture5.jpg';
import picture6 from './picture6.jpg';
import picture7 from './picture7.jpg';
const images = [picture1, picture2, picture3, picture4, picture5, picture6, picture7];


function PictureSlider() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="picture-container" >
       {/* <ReactImageResizer
        src={images[currentImageIndex]}
        height={200}
        width={300}
      />  */}
       <img src={currentImageIndex === 0 ? picture1 : currentImageIndex === 1 ? picture2 : currentImageIndex === 2 ? picture3 : currentImageIndex === 3 ? picture4 : currentImageIndex === 4 ? picture5 : currentImageIndex === 5 ? picture6 : picture7 } alt="Image" /> 
    </div>
  );
}

export default PictureSlider;