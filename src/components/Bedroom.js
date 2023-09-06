import React from 'react';
import { Link } from 'react-router-dom';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';

const Bedroom = () => {

const data=[{
  id:'1',
  image: require('./images/8-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'2',
  image: require('./images/10-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'3',
  image: require('./images/11-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'4',
  image: require('./images/18-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'5',
  image: require('./images/20-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'6',
  image: require('./images/21-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'7',
  image: require('./images/23-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'8',
  image: require('./images/24-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'7',
  image: require('./images/26-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'8',
  image: require('./images/30-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'9',
  image: require('./images/33-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'10',
  image: require('./images/35-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'11',
  image: require('./images/37-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'12',
  image: require('./images/38-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'13',
  image: require('./images/41-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'14',
  image: require('./images/44-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'15',
  image: require('./images/45-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'16',
  image: require('./images/49-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'17',
  image: require('./images/51-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'18',
  image: require('./images/52-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'19',
  image: require('./images/57-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'20',
  image: require('./images/60-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'21',
  image: require('./images/68-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'22',
  image: require('./images/78-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'23',
  image: require('./images/80-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
},
{
  id:'24',
  image: require('./images/84-01.jpg'),
  Name : 'We will create a bedroom that is tailored to your individual needs.',
}
]



  return (
    <>
    <div>

    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>Bedroom</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>


    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-9 my-5">
        <h1 className="cata-head"><span className='text-light'>i</span>Modular Bedroom Designs</h1>
        <p style={{fontSize:'18px', color:'grey'}}>
            At Livspace, we craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen designs can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs of 2023 to transform your space today.
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

export default Bedroom
