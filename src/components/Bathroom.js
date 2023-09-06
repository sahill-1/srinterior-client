import React from 'react';
import { Link } from 'react-router-dom';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';

const Bathroom = () => {

    const data=[{
        id:'1',
        image: require ('./images/15-01.jpg'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'2',
        image: require ('./images/62-01.jpg'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'3',
        image: require ('./images/70-01.jpg'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'4',
        image: require ('./images/74-01.jpg'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'5',
        image: require ('./images/107.png'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'6',
        image: require ('./images/108.png'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'7',
        image: require ('./images/109.png'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
    {
        id:'8',
        image: require ('./images/110.png'),
        Name:'We can customize your bathroom to suit your specific needs.',
    },
]





  return (
    <>
    <div>

    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>Bathroom</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>


    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-9 my-5">
        <h1 className="cata-head"><span className='text-light'>i</span>Modular Bathroom Designs</h1>
        <p style={{fontSize:'18px', color:'grey'}}>
        Modular bathroom designs are a great way to maximize efficiency and storage within a bathroom. This design approach focuses on utilizing a variety of different components that can be arranged and rearranged to create a customized look. By utilizing modules, a wide range of design possibilities are available for any size and shape of bathroom. Modular bathroom designs are also cost-effective, as they can be scaled up or down depending on the size of the bathroom and the desired features. With a modular bathroom design, you can create the perfect space for your needs and personal style.
        </p>
    </div>
</div>
    <div className="row d-flex justify-content-center align-items-center">
 {data.map((item)=>
   
    <div className="col-sm-12 col-md-4 mt-4" >
    <div className="card catagories-card" key={item.id}>
      <div style={{overflow : 'hidden'}}><img src={item.image} className='img-fluid' alt='' /></div>
      <h6 className='text-center px-2 mt-2'>{item.Name}</h6>
     <div className='d-flex justify-content-around align-items-around my-3'>
     <button className='mx-2 link-button'>
     <Link to="tel:9990283525" style={{textDecoration:'none', color:'white'}}><AiFillPhone size={23}/>  Call Us</Link>
   </button>
       <button className='mx-2 link-button-border'>
       <Link to="https://wa.me/9990283525" className='link-button-text' style={{textDecoration:'none', color:'#9b8140'}}> <BsWhatsapp size={23}/>  Whatsapp</Link>
     </button>
     </div>
    </div>
    </div>
    )}
    





    </div>
    </div>




    </div>
    </>
  )
}

export default Bathroom
