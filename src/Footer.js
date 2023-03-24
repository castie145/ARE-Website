import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SocialMedia from './SocialMedia.js';
import './Footer.css'
function Footer() {

    return (
        <div className="main-footer">
            <div className='text textStart'>
                <h1>Get in touch</h1>
                {/* <h2 className='question'>Have you any questions? We'd love to hear from you</h2> */}
            </div>
            <div className="containerInfo">

                <div className="row">

                    {/* column1 */}
                    <div className='col'>
                        <div className='col-logo'>
                            <div className=' logoInFooter'>
                                <img  src='logoARE.png' />
                            </div>
                        </div>   
                            
                        <h4 className='follow'>Follow us on Social Media:</h4>
                        <SocialMedia></SocialMedia>
                        
                    </div>
                    {/* column2 */}
                    <div className="col">

                        <h4><FaMapMarkerAlt></FaMapMarkerAlt>&nbsp;ADDRESS</h4>
                        <ul className="list">
                            <li>R377+FGR National School of Computer Science </li>
                            <li>University Campus of Manouba 2010</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="list">
                        <h4><FaPhone></FaPhone>&nbsp;PHONE</h4>
                        <ul className='col'>
                            <li>+21695317195</li>
                            <li>+21650047963</li>
                        </ul>
                    </div>
                    {/* column4 */}
                    <div className="list">
                        <h4><FaEnvelope></FaEnvelope>&nbsp;EMAIL</h4>
                        <ul>
                            <li>For support or any question</li>
                            <li>Email us at:</li>
                            <li>association.robotique@ensi-uma.tn</li>
                        </ul>


                    </div>


                </div>


            </div>
            <div className='text textEnd'>
                <p>&copy;{new Date().getFullYear()} Association Robotique Ensi.&nbsp; All rights reserved.</p>
            </div>

        </div>
    )
}
export default Footer;