import React, { useState } from 'react';
import img from "./images/logo.jpeg";
import {Link} from "react-router-dom";
import nav1 from './images/nav1.png';
import nav3 from './images/nav-3.png';
import nav4 from './images/nav-4.png';
import nav5 from './images/nav-5.png';
import nav6 from './images/nav-6.png';
import nav7 from './images/nav-7.png';
import nav8 from './images/nav-8.png';

function Navbar() {
  

  const [sidepanelWidth, setSidepanelWidth] = useState(0);

  const openNav = () => {
    setSidepanelWidth(250);
  };

  const closeNav = () => {
    setSidepanelWidth(0);
  };



  return (
    <>
    <div className="Navbar">
      {/* Navbar */}
      <div className="container-fluid px-5 bg-light" style={{backgroundColor:"#f5f5f0"}} >
        <div className="row nav-list-parent">
          <div className="col-xl-2 col-12 d-flex justify-content-center align-items-center">
            <img src={img} className='logo-nav' alt="downloading..." />
          </div>

          <div className="col-xl-10 col-12 pt-4">
            <ul className="nav-list">
              <li><Link to ='/'>Home</Link></li>
              <li><Link to="/modularkitchen">Modular Kitchen</Link></li>
              <li><Link to="/wardrobe">Wardrobe</Link></li>
              <li><Link to="/bedroom">Bedroom</Link></li>
              <li><Link to="/livingroom">Living Room</Link></li>
              <li><Link to="/bathroom">Bathroom</Link></li>
              <li><Link to ='/contact'>Contact Us</Link></li>
            </ul>
          </div>
        </div>


        <div className='toggler-parent'>
        <div className="row d-flex">
        <div className="col-6 d-flex align-items-center">
          <img src={img} className='logo-nav' alt="downloading..." />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <button className="openbtn" onClick={openNav}>☰</button>
        </div>
      </div>
        </div>
      <div id="mySidepanel" className="sidepanel" style={{ width: sidepanelWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
        <Link to ='/'><img src={nav1} className='sidenav-logo' /> Home</Link>
        <Link to="/modularkitchen"><img src={nav3} className='sidenav-logo' /> Modular Kitchen</Link>
        <Link to="/wardrobe"><img src={nav4} className='sidenav-logo' /> Wardrobe</Link>
        <Link to="/bedroom"><img src={nav5} className='sidenav-logo' /> Bedroom</Link>
        <Link to="/livingroom"><img src={nav6} className='sidenav-logo' /> Living Room</Link>
        <Link to="/bathroom"><img src={nav7} className='sidenav-logo' /> Bathroom</Link>
        <Link to ='/contact'><img src={nav8} className='sidenav-logo' /> Contact Us</Link>
      </div>
      

      </div>
    </div>
    </>
  );
}

export default Navbar;
