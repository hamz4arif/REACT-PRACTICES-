import { useState } from "react";
import ProductCard from "./product-card";
import {useEffect} from 'react';
import { useParams } from "react-router-dom";
import api from "../api/products";
import "./collection.css";

function Collection({addToCart}) {
  let {category} = useParams();
  let [products, setProducts] = useState(() => api.getVisibleProducts(category));
  
  useEffect(()=>{
    setProducts(() => api.getVisibleProducts(category));
  }, [category]);

  if (!products.length)
    return (
      <h3 className="container py-5 text-danger bg-light">
        No product found for category {`"${category}"`}
      </h3>
    );
  
  return (
    <main>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Collection;
