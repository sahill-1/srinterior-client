import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPhone } from 'react-icons/ai';
import {BiCurrentLocation} from 'react-icons/bi';
import {HiMail} from 'react-icons/hi';


const Contactform = () => {
  return (
    <>
    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>CONTACT US</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>




      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 ">
            <form action="/action_page.php" className="p-5 bg-light shadow">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
          <div>
          <div className="card px-3 py-4 contact-card mt-4">
          <p className='px-2' ><Link to='https://goo.gl/maps/N4N8Az7rCYrwwAJp8'  className='link'><BiCurrentLocation size={30} /> Address : Pratap Vihar Sector-12, Vijay Nagar Ghaziabad</Link></p>
        </div>

        <div className="card px-3 py-4 contact-card mt-4">
          <p className='px-2' ><Link to='mailto:mohdsawezchoudhary@gmail.com'  className='link'><HiMail size={30} /> Mail ID : mohdsawezchoudhary@gmail.com</Link></p>
        </div>

        <div className="card px-3 py-4 contact-card mt-4">
          <p className='px-2' ><Link to='tel:9990283525'  className='link'><AiFillPhone size={30} /> Contcat No. : (+91) 9990283525, 8532878725</Link></p>
        </div> 

          </div>

          </div>
        </div>
      </div>



      <div class="container-fluid mt-5">
      <iframe
          title="Google Map"
          style={{ width: '100%', height: '450px', border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112073.3880499102!2d77.22873489726558!3d28.62096810000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef95230d8ff9%3A0xc0766976d6598548!2sSR%20Interior!5e0!3m2!1sen!2sin!4v1691395142123!5m2!1sen!2sin"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </div>
    </>
  )
}

export default Contactform;
