import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SliderCompo from './Components/Home/SliderCompo';
import Slider2 from './Components/Home/Slider2';
import Carosole from './Components/Home/Carosole';
import MenPage from './Components/MenPage';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar />
       {/* <SliderCompo />
       <Slider2 />
       <Carosole /> */}
      <AllRoutes />

       <Footer />
      
    </div>
  );
}

export default App;
