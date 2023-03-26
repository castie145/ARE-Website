
import React, { useState } from 'react';
import './ArrayOfPictures.js';
import './PictureAre.css';


function PictureAre({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const previousPicture = () => {
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };

  const nextPicture = () => {
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentPicture]} alt={`Picture ${currentPicture}`} />
      <div className="button-container">
        <button className="previous-button" onClick={previousPicture}>
          &lt;
        </button>
        <button className="next-button" onClick={nextPicture}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PictureAre;
