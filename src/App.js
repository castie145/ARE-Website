
import './App.css';
import NavBar from './Components/NavBar.js';
import Pictures from './Components/Pictures.js';
import SocialMedia from './Components/SocialMedia.js';
import PictureAre from './Components/PictureAre.js';
import AboutUs from './Components/AboutUs.js';
import AreInNumbers from './Components/AreInNumbers';
import Footer from './Components/Footer.js';
import ImageSlider from './Components/ScrollingPictures';



function App() {
  return (
    <div className="page-container">
    
      <NavBar></NavBar>
      <div className='part1'>
         <Pictures className="pict"></Pictures>
         {/* <SocialMedia ></SocialMedia> */}

      </div>
      
       {/* <PictureAre></PictureAre>  */}
       <AboutUs></AboutUs>
      <AreInNumbers></AreInNumbers>
    
      <div>
        <Footer></Footer>
      </div>



    </div>
  );
}

export default App;
