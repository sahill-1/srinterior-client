import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/logo.jpeg';
import {BiRightArrowAlt} from 'react-icons/bi';
import {BiCurrentLocation} from 'react-icons/bi';
import {LuMail} from 'react-icons/lu';
import {AiOutlinePhone} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-light py-3">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 footer-li">
              <h5>Quick Links</h5>
              <p><Link to="'/" className='link-footer'><BiRightArrowAlt size={20} /> Home</Link></p>
              <p><Link to="" className='link-footer'><BiRightArrowAlt size={20} /> Categories</Link></p>
              <p><Link to="/contact" className='link-footer'><BiRightArrowAlt size={20} /> Contact Us</Link></p>
            </div>

            <div className="col-sm-12 col-md-3 footer-li">
              <h5>Categories</h5>
              <p><Link to="/wardrobe" className='link-footer'><BiRightArrowAlt size={20} /> Wardrobe</Link></p>
              <p><Link to="/bedroom" className='link-footer'><BiRightArrowAlt size={20} /> Bedroom</Link></p>
              <p><Link to="/livingroom" className='link-footer'><BiRightArrowAlt size={20} /> Living Room</Link></p>
              <p><Link to="/modularkitchen" className='link-footer'><BiRightArrowAlt size={20} /> Modular Kitchen</Link></p>
            </div>

            <div className="col-sm-12 col-md-3 footer-li">
              <h5>Contact Us</h5>
              <p><Link to="https://goo.gl/maps/N4N8Az7rCYrwwAJp8" className='link-footer'><BiCurrentLocation size={20} /> Address : Pratap Vihar Sector-12, Vijay Nagar Ghaziabad</Link></p>
              <p><Link to="mailto:mohdsawezchoudhary@gmail.com" className='link-footer'><LuMail size={20} /> Mail ID : mohdsawezchoudhary@gmail.com</Link></p>
              <p><Link to="tel:9990283525" className='link-footer'><AiOutlinePhone size={20} /> Contact No. : (+91) 9990283525, 8532878725</Link></p>
            </div>

            <div className="col-sm-12 col-md-3 footer-li">
              <img src={img} className="img-fluid" alt="downloading..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#b09351' }}>
        <p className="text-center py-3">All rights reserved by <b>BUSINESS WORLD TRADE</b></p>
      </div>
    </div>
  );
};

export default Footer;
