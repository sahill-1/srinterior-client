import React from 'react';
import kitchen from './images/kitchen.png';
import bedroom from './images/bedroom.png';
import spacesaving from './images/spacesaving.png';
import livingroom from './images/livingroom.png';
import office from './images/office.png';
import bethroom from './images/bathroom.png';


const Catacards = () => {
  return (
    <>
    <div className="container my-5">
    <div className="row">
    <div className="col-sm-12 col-md-2"></div>
    <div className="col-sm-12 col-md-8">
    <h2 className='text-center' >"Create a Cozy and Inviting Interior Design"</h2>
    <h6 className='text-center' style={{color:'grey'}}>Create a cozy and inviting interior design by incorporating warm colors, soft textures, and comfortable furniture.</h6>
    </div>
    <div className="col-sm-12 col-md-2"></div>
    </div>


    <div className="row ">
    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-center">
    <div className="card catagories-card">
      <img src={kitchen} className='img-fluid' alt="" />
      <h4 class="bottom-left">Modular Kitchen</h4>
    </div>
    </div>

    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-center">
    <div className="card catagories-card">
      <img src={spacesaving} className='img-fluid' alt="" />
      <h4 class="bottom-left">Space Saving Furniture</h4>
    </div>
    </div>


    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-center">
    <div className="card catagories-card">
      <img src={bedroom} className='img-fluid' alt="" />
      <h4 class="bottom-left">Bedroom</h4>
    </div>
    </div>


    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-center">
    <div className="card catagories-card">
      <img src={office} className='img-fluid' alt="" />
      <h4 class="bottom-left">Home & Office</h4>
    </div>
    </div>


    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-center">
    <div className="card catagories-card">
      <img src={livingroom} className='img-fluid' alt="" />
      <h4 class="bottom-left">Living Room</h4>
    </div>
    </div>

    <div className="col-sm-12 col-md-4 mt-4 d-flex justify-content-center align-items-centerx`">
    <div className="card catagories-card">
      <img src={bethroom} className='img-fluid' alt="" />
      <h4 class="bottom-left">Bathroom</h4>
    </div>
    </div>


    </div>
    </div>
    </>
  )
}

export default Catacards