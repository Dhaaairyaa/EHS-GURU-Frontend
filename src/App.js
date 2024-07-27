import './App.css';
import ContactUs from './pages/contactUs';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Clientele from './pages/clientele';
import Carrer from './pages/Career';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/clientele" element={<Clientele/>}/>
        <Route path="/careers" element={<Carrer/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path= "/aboutUs" element={<AboutUs></AboutUs>}/>
      </Routes>
    </div>
  );
}

export default App;
