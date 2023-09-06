

import './App.css';
import Catacards from './components/Catacards';
import Inspiration from './components/Inspiration';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/services';
import Footer from './components/Footer';
import Upperfooter from './components/Upperfooter';
import {Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Modularkitchen from './components/Modularkitchen'
import Wardrobe from './components/Wardrobe';
import Bedroom from './components/Bedroom'
import Livingroom from './components/Livingroom';
import Bathroom from './components/Bathroom';


function App() {
 
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/modularkitchen' element={<Modularkitchen/>}/>
    <Route path='/wardrobe' element={<Wardrobe/>}/>
    <Route path='/bedroom' element={<Bedroom/>} />
    <Route path='/livingroom' element={<Livingroom/>}/>
    <Route path='/bathroom' element={<Bathroom/>}/>
  </Routes> 
  <Footer/>
      </>
  );
}

export default App;
