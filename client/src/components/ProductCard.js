import React from 'react';

import './ProductCard.css';

import { Link,  } from 'react-router-dom';

function ProductCard({ product }) {

  return (
    <Link to={`/details/${product?._id}`} style={{textDecoration:"none"}}>
  <div className='cardd'>
    <img src={product?.img} />
    <div>
        <h5>{product?.name}</h5>
        <p>{product?.price} DT</p>
     
        
    </div>

  </div>
  </Link>
  );
}

export default ProductCard;