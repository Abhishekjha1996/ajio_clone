import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SliderCompo from './Components/Home/SliderCompo';
import Slider2 from './Components/Home/Slider2';
import Carosole from './Components/Home/Carosole';

function App() {
  return (
    <div className="App">
       <Navbar />
       <SliderCompo />
       <Slider2 />
       <Carosole />
       <Footer />
      
    </div>
  );
}

export default App;
