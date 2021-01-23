import { useState } from "react";
import ProductCard from './product-card';
import { useParams } from "react-router-dom";
import api from "../api/products";
import "./collection.css";

function Collection({addtocart}) {
  let {category} = useParams();
  let [products,] = useState(() => api.getVisibleProducts(category));

  return (
      <main>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {
                products.map((product) => (
                  <ProductCard key={product.id} product={product} addtocart={addtocart} />
              ))}
              
            </div>
          </div>
        </div>
      </main>
  );
}

export default Collection;