
import './App.css';
import NavBar from './Components/NavBar.js';
import Pictures from './Components/Pictures.js';
import AboutUs from './Components/AboutUs.js';
import AreInNumbers from './Components/AreInNumbers';
import Footer from './Components/Footer.js';
import Awards from './Components/arenumber';


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
      <Awards></Awards>
      <div>
        <Footer></Footer>
      </div>



    </div>
  );
}

export default App;
