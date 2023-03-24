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


function SocialMedia() {
     return (
         <div className='logos'>
            <div>
                <FontAwesomeIcon icon={faFacebook} />
            </div>

              <div>
                <FontAwesomeIcon icon={faInstagram} />
                </div>

             <div>
                <FontAwesomeIcon icon={faLinkedin} />
                 </div>
             <div>
                 <FontAwesomeIcon icon={faYoutube} />
            </div>
            
        </div>
    )
}
 export default SocialMedia;

