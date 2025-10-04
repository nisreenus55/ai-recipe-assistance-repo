import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/api';

const ProductList = () => {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
    
  return (
    <div>
      <div>
        <h2 >Available Products</h2>
        <ul>
          {products.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList