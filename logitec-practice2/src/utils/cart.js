function addToCart(cart, product, qty = 1) {
    if (cart.findIndex((prod) => prod.id === product.id) === -1)
    return [...cart, { ...product, cartQty: qty }];
    else 
    return incrementCart(cart,product);
}
function incrementCart(cart,product,qty=1){
   return cart.map(p=>p.id===product.id?{...product,cartQty:p.cartQty+qty}:p);
}
function removeFromCart(cart,product){
    return(
        cart.filter(p=>p.id!==product.id)
    )
}
function decrementCart(cart,product,qty=1){
   if(product.cartQty<=1)
   return removeFromCart(cart,product)
   else
   return incrementCart(cart,product,-qty)
}
export default { addToCart,incrementCart,decrementCart,removeFromCart }