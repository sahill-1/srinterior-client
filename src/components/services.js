import React, { useEffect } from 'react';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Services = () => {
  

  return (
   
    <div className="container my-5">
    <div className="row"><h2 className='text-center'>Choose Us for the Best Quality Service</h2></div>

    <div className="row pt-3 pb-5">

    <Carousel responsive={responsive}>
   
   <div class="card service-card d-flex justify-content-center align-items-center" >
    <img class="card-img-top service-icon" src={icon1} alt="Card image cap"/>
    <div class="card-body">
      <h6 class="card-title">10 Years Warranty</h6>
    </div>
  </div>

  <div class="card service-card d-flex justify-content-center align-items-center" >
    <img class="card-img-top service-icon" src={icon2} alt="Card image cap"/>
    <div class="card-body">
      <h6 class="card-title">Quality Check</h6>
    </div>
  </div>


  <div class="card service-card d-flex justify-content-center align-items-center" >
  <img class="card-img-top service-icon" src={icon3} alt="Card image cap"/>
  <div class="card-body">
    <h6 class="card-title">Happy Clients</h6>
  </div>
</div>


<div class="card service-card d-flex justify-content-center align-items-center" >
  <img class="card-img-top service-icon" src={icon4} alt="Card image cap"/>
  <div class="card-body">
    <h6 class="card-title">300+ Designers</h6>
  </div>
</div>


<div class="card service-card d-flex justify-content-center align-items-center" >
  <img class="card-img-top service-icon" src={icon5} alt="Card image cap"/>
  <div class="card-body">
    <h6 class="card-title">catalogue products</h6>
  </div>
</div>

<div class="card service-card d-flex justify-content-center align-items-center" >
  <img class="card-img-top service-icon" src={icon6} alt="Card image cap"/>
  <div class="card-body">
    <h6 class="card-title">catalogue products</h6>
  </div>
</div>
   
    
 
</Carousel>
</div>

</div>
  );
}

export default Services;
