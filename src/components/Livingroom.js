import React from 'react';
import { Link } from 'react-router-dom';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';

const Livingroom = () => {
    const data=[{
        id:'1',
        image: require ('./images/75-01.jpg'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'2',
        image: require ('./images/18-01.jpg'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'3',
        image: require ('./images/24-01.jpg'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'4',
        image: require ('./images/53-01.jpg'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'5',
        image: require ('./images/livingroom.png'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'6',
        image: require ('./images/103.png'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'7',
        image: require ('./images/104.png'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
    {
        id:'8',
        image: require ('./images/105.png'),
        Name:'We can create a livingroom space that meets all of your needs.',
    },
]
  return (
    <>
    <div>

    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>Living Room</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>


    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-9 my-5">
        <h1 className="cata-head"><span className='text-light'>i</span>stylish Livingroom Designs</h1>
        <p style={{fontSize:'18px', color:'grey'}}>
        Living rooms are the heart of the home - they are the gathering place for friends and family to spend quality time together. They often serve as a central hub for entertaining and are typically designed with comfort and style in mind. Living rooms can be decorated with furniture pieces, artwork, and accessories to create a welcoming and inviting atmosphere. Whether you prefer a traditional, modern, or eclectic style, the living room is the perfect place to show off your personal tastes and create an inviting and comfortable space for you and your guests to enjoy.
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

export default Livingroom
