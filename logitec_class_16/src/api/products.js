// server api - products CRUD operations

import products from '../data/products';

const getVisibleProducts = (category) => {
  if(!category || category.toUpperCase() === "ALL")
    return products;
  else
    return products.filter(p => p.category.toUpperCase() === category.toUpperCase());
} 

const getProductByLink = (link) => {
  let array = products.filter(product => product.link === link)
  return array.length > 0 ? array[0] : null;
}

export default {getVisibleProducts, getProductByLink} ;
