import './Pictures.css';
import ImageSlider from './ScrollingPictures';
function Pictures(){
    return(
        <div class="container">
              <div className='image-container'>
                 <ImageSlider></ImageSlider>
                
                 
                <img className='logo' src='logoARE.png' />
              </div>
               <p className='associationName'>Association Robotique ENSI</p>
               <p className='slogon'>#Ignite-the-passion</p>
            
            
        </div>
    )
}
export default Pictures;