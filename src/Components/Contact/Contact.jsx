import axios from 'axios'
import React, { use } from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  // const [allProducts, setAllProducts] = useState(null);


  // //call Api

  // // request => frontend
  // // response => backend

  // async function getAllProduct(){
  //   let [data]= await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  //   setAllProducts(data.data);
  // }
  // useEffect(() => {
  //   getAllProduct();
  // }, []); // Empty dependency array means this effect runs once after the initial render
  return (

<>
<Navbar/>
    <div className="container text-center my-5">
      <h2 className="fw-bold fs-1">CONATCT SECTION</h2>
      <div className="d-flex justify-content-center my-3">
        <div style={{ borderBottom: "2px solid #2c3e50", width: "100px" }}></div>
        <div className="mx-2 text-primary">★</div>
        <div style={{ borderBottom: "2px solid #2c3e50", width: "100px" }}></div>
      </div>

      <form className="w-50 mx-auto">
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="userName"
            name="userName"
          />
        </div>

        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            placeholder="userAge"
            name="userAge"
          />
        </div>

        <div className="form-group mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="userEmail"
            name="userEmail"
          />
        </div>

        <div className="form-group mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="userPassword"
            name="userPassword"
          />
        </div>

        <button type="submit" className="btn btn-success px-4 py-2">
          send Message
        </button>
      </form>
    </div>

    <Footer/>


</>
  )
}

export default Contact

