import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from 'react-icons/ai';
import Contactform from './Contactform';
import { Link } from 'react-router-dom';


const Contactusbutton = () => {
  return (
    <>



    
    <div className="container-fluid contactus-button py-5 my-5">
        <div className="row py-5">
          <h2 className='text-center py-3 contactus-head'>Your dream home is just a click away</h2>
          <div className='d-flex justify-content-center align-items-center'>
          <button className='mx-2'>
         <Link to='tel:9990283525' style={{textDecoration:'none', color:'white'}} ><AiFillPhone size={30}/>  Call Us</Link>
        </button>
            <button className='mx-2'>
            <Link to='https://wa.me/9990283525' style={{textDecoration:'none', color:'white'}}><BsWhatsapp size={30}/>  Whatsapp Us</Link>
          </button>
          </div>
        </div>
    </div>

   


    </>
  )
}

export default Contactusbutton;
