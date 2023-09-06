import React from 'react';
import { Link } from 'react-router-dom';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';

const Wardrobe = () => {
 const data=[{
    id:'1',
    image: require ('./images/12-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'2',
    image: require ('./images/13-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'3',
    image: require ('./images/16-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'4',
    image: require ('./images/17-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'5',
    image: require ('./images/22-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'6',
    image: require ('./images/24-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'7',
    image: require ('./images/27-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'8',
    image: require ('./images/29-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'9',
    image: require ('./images/34-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'10',
    image: require ('./images/40-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'11',
    image: require ('./images/42-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'12',
    image: require ('./images/43-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'13',
    image: require ('./images/46-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'15',
    image: require ('./images/55-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'16',
    image: require ('./images/75-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'17',
    image: require ('./images/85-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'18',
    image: require ('./images/88-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'19',
    image: require ('./images/90-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'20',
    image: require ('./images/96-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 {
    id:'21',
    image: require ('./images/98-01.jpg'),
    Name:'We tailor our wardrobes to your individual needs and preferences.',
 },
 
]




  return (
    <>
    <div>

    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>Wardrobe</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>


    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-9 my-5">
        <h1 className="cata-head"><span className='text-light'>i</span>Stylish Wardrobe Designs</h1>
        <p style={{fontSize:'18px', color:'grey'}}>
        A wardrobe is a tall piece of furniture used for storing clothes and other items. It typically has shelves, drawers, and a rod for hanging clothes. Wardrobes provide a convenient way to store and organize clothing, helping to keep a bedroom or other living space neat and tidy. Wardrobes come in many shapes, sizes, and styles, with options ranging from standalone pieces to integrated units that match other bedroom furniture.
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

export default Wardrobe
