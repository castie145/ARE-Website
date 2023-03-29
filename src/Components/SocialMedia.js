//  import React from 'react';
//  import {
//     AiYoutube,
//     AiFacebook,
//     AiLinkedin,
//     AiInstagram
//    } from   'react-icons/ai';

import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


    const handleButtonClickInstagram = () => {
      window.open('https://www.instagram.com/association.robotique.ensi/', '_blank');
    };
    
    const handleButtonClickFacebook = () => {
        window.open('https://www.facebook.com/association.robotique.ensi', '_blank');
      };
    
      const handleButtonClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/association-robotique-ensi/', '_blank');
      }; 
      const handleButtonClickYoutube= () => {
        window.open('https://www.youtube.com/@associationrobotiqueensi8646', '_blank');
      }; 
       
function SocialMedia() {
     return (
         <div className='logos'>
            <div>
                <button  className='btns' type='submit'>
                    <FontAwesomeIcon icon={faFacebook}  onClick={handleButtonClickFacebook}/>
                </button>
            </div>

              <div>
                <FontAwesomeIcon icon={faInstagram}  onClick={handleButtonClickInstagram}/>
                </div>

             <div>
                <FontAwesomeIcon icon={faLinkedin} onClick={handleButtonClickLinkedin} />
                 </div>
             <div>
                 <FontAwesomeIcon icon={faYoutube}  onClick={handleButtonClickYoutube}/>
            </div>
            
        </div>
    )
}
 export default SocialMedia;

