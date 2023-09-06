import React from 'react';
import gallery1 from './images/gallery1.png';
import gallery4 from './images/gallery4.png';
import gallery3 from './images/gallery3.png';
import gallery2 from './images/gallery2.png';
import gallery5 from './images/gallery5.png';
import gallery6 from './images/gallery6.png';
import gallery7 from './images/gallery7.png';
import gallery8 from './images/gallery8.png';
import gallery9 from './images/gallery9.png';

const Inspiration = () => {
  return (
    <>
    <div className="container-fluid py-3" style={{backgroundColor:'#F7F6F7'}}>
    <div className="container my-5" >
    <div className="row">
    
    <h2>Check out home decor magazines for interior</h2>
    <h6 style={{color:'grey'}}>Give your home a new look with these interior design ideas curated for you</h6>
  
    </div>


    <div className="row">
    <div className="col-sm-12 col-md-6 mt-4">
    <div className="gallery">
      <img src={gallery1} className='img-fluid' alt="" />
      <p class="bottom-left">Master Bedroom</p>
    </div>
    </div>

    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery2} className='img-fluid' alt="" />
      <p class="bottom-left">Restaurants</p>
    </div>
    </div>


    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery3} className='img-fluid' alt="" />
      <p class="bottom-left">TV Hall</p>
    </div>
    </div>


    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery6} className='img-fluid' alt="" />
      <p class="bottom-left">Morden Kitchen</p>
    </div>
    </div>


    <div className="col-sm-12 col-md-6 mt-4">
    <div className="gallery">
      <img src={gallery4} className='img-fluid' alt="" />
      <p class="bottom-left">Restaurants</p>
    </div>
    </div>

    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery5} className='img-fluid' alt="" />
      <p class="bottom-left">Wardrobe</p>
    </div>
    </div>

    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery7} className='img-fluid' alt="" />
      <p class="bottom-left">Bathroom</p>
    </div>
    </div>


    <div className="col-sm-12 col-md-3 mt-4">
    <div className="gallery">
      <img src={gallery8} className='img-fluid' alt="" />
      <p class="bottom-left">Balcony</p>
    </div>
    </div>

    <div className="col-sm-12 col-md-6 mt-4">
    <div className="gallery">
      <img src={gallery9} className='img-fluid' alt="" />
      <p class="bottom-left">Hall</p>
    </div>
    </div>


    </div>
    </div>
    </div>
    </>
  )
}

export default Inspiration