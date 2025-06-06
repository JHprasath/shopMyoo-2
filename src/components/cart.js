import React, { useEffect, useState } from 'react';
import { getData } from './services/apiService';
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/all');
        console.log("Fetched data:", data);
        setCarts(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='header1'>Features</h3>
    <div className='overall12'>
      {carts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        carts.map((item) => (
          <div key={item.id} className='cart-item'>
            <div className='image-container'>
              <img src={item.image} alt={item.imageName} />
              <div className='rating'>
                <mark>{item.rating}★</mark>
              </div>
            </div>
            <div className='content-container'>
              <h4>{item.title}</h4>
              <p>{item.description || item.desc}</p>
              <span>
                <h3>Rs.{item.rate}</h3>
                <del>Rs.{item.MRP}</del>
                <span> ({item.offer}% OFF)</span>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Cart;
