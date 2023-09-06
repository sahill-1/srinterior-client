import React from 'react';
import {BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from 'react-icons/ai';
import {Link} from 'react-router-dom';


const Modularkitchen = () => {
    const data=[{
        id:"1",
        image:require("./images/4-01.jpg"),
        Name:'Modern small-straight Kitchen Design With Black Backsplash Tiles',
    },
    {
        id:"2",
        image:require("./images/6-01.jpg"),
        Name:'Modern big-straight Kitchen Design With White Backsplash Tiles',
    },
    {
        id:"3",
        image:require("./images/9-01.jpg"),
        Name:'Modern Kitchen Design With Space for Dining Area based on yellow background',
    } ,
    {
        id:"4",
        image:require("./images/19-01.jpg"),
        Name:'Modern U-Shape Kitchen Design With Brown Backsplash Tiles',
    } ,
    {
        id:"5",
        image:require("./images/31-01.jpg"),
        Name:'Modern small-Square Kitchen Design With Gray and cream  Tiles',
    },
    {
        id:"6",
        image:require("./images/36-01.jpg"),
        Name:'Modern Big-U Shaped Kitchen Design With brown and black Tiles',
    },
    {
        id:"7",
        image:require("./images/48-01.jpg"),
        Name:'Modern small Kitchen Design With Green and silver Backsplash Tiles',
    },
    {
        id:"8",
        image:require("./images/54-01.jpg"),
        Name:'Modern Big-L Shaped Kitchen Design With Black and Brown Tiles',
    },
    {
        id:"9",
        image:require("./images/61-01.jpg"),
        Name:'Modern U-Shape Kitchen Design With Brown Black Backsplash Tiles',
    },
    {
        id:"10",
        image:require("./images/63-01.jpg"),
        Name:'Modern Square shaped Kitchen Design With Gray and white Tiles',
    },
    {
        id:"11",
        image:require("./images/64-01.jpg"),
        Name:'Modern U-Shaped Kitchen Design With Light-brown Tiles',
    },
    {
        id:"12",
        image:require("./images/65-01.jpg"),
        Name:'Modern L-Shaped Kitchen Design With White and Gray Tiles',
    },
    {
        id:"13",
        image:require("./images/67-01.jpg"),
        Name:'Modern U-Shaped Kitchen Design With Blue Backsplash Tiles',
    },
    {
        id:"14",
        image:require("./images/69-01.jpg"),
        Name:'Modern Big-straight Kitchen Design With Brown and Cream Color Tiles',
    },
    {
        id:"15",
        image:require("./images/72-01.jpg"),
        Name:'Modern  L-Shaped Kitchen Design With Multi Drawer With Cream color Background',
    },
    {
        id:"16",
        image:require("./images/73-01.jpg"),
        Name:'Modern U-Shaped Kitchen Design With Brown and Cream Color Tiles',
    },
    {
        id:"17",
        image:require("./images/76-01.jpg"),
        Name:'Modern U-Shaped Kitchen Design With Black and White Color Tiles',
    },
    {
        id:"18",
        image:require("./images/77-01.jpg"),
        Name:'Modern L-Shaped Kitchen Design With Gray Color Tiles',
    },
    {
        id:"19",
        image:require("./images/79-01.jpg"),
        Name:'Modern L-Shaped Kitchen Design With Blue and light brown Color Tiles',
    },
    {
        id:"20",
        image:require("./images/81-01.jpg"),
        Name:'Modern L-Shaped Kitchen Design With Purple and white Color Tiles',
    },
    {
        id:"21",
        image:require("./images/86-01.jpg"),
        Name:'Modern small-Square Kitchen Design With Gray and Pink Backsplash Tiles',
    },
    {
        id:"22",
        image:require("./images/97-01.jpg"),
        Name:'Modern small-straight Kitchen Design With White and Gray Tiles',
    }]
  return (
    <div>

    <div className="container-fluid banner">
    <div className="row py-5">
    <div className="col-2 col-md-6"></div>
    <div className="col-8 col-md-4 py-5 banner-card">
     <h1 className='text-dark text-center'>MODULAR KITCHEN</h1>
    </div>
    <div className="col-2 col-md-2"></div>
    </div>
    </div>


    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-9 my-5">
        <h1 className="cata-head"><span className='text-light'>i</span>Modular Kitchen Designs</h1>
        <p style={{fontSize:'18px', color:'grey'}}>
        Modular kitchens have revolutionized the way kitchens are designed and used. They offer a wide range of designs, colors, materials, and sizes that can be tailored to suit any space. With their easy installation and clean, modern look, modular kitchens are a great way to update your kitchen and make it more functional. They come with a variety of features, such as adjustable shelves, drawers, and cabinets which make it easy to organize and store any items you need. Modular kitchens are also a great way to add a unique touch to your home, allowing you to express your individual style and personality.
        </p>
    </div>
</div>
    <div className="row d-flex justify-content-center align-items-center">
{data.map((item)=>
    <div className="col-sm-12 col-md-4 mt-4" key={item.id}>
    <div className="card catagories-card">
      <div style={{overflow : 'hidden'}}><img src={item.image} className='img-fluid' alt={item.Name} /></div>
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
  )
}

export default Modularkitchen
