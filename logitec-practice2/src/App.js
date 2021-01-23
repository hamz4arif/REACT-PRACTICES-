import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./home";
// import Collection from "./collection";
// import Product from "./product";
// import Checkout from './checkout/Checkout';
// import Signin from './sign-in/Signin';
import Header from "./common/header";
import Footer from './common/footer';
import Home from "./home";
import Checkout from "./checkout/Checkout";
import Signin from "./sign-in/Signin";
import Collection from "./collection";
import Product from "./product";
import Cart from "./cart/cart";
import { useState } from "react";
import cartLib from './utils/cart'
import ThankYou from './thankyou/thankyou'

function App() {
  let [cart,setCart]=useState([]);
  let addToCart=(p)=>setCart(cartLib.addToCart(cart,p))
  const incrementCart=(p)=>setCart(cartLib.incrementCart(cart,p))
  const decrementCart=(p)=>setCart(cartLib.decrementCart(cart,p))
  const removeFromCart=(p)=>setCart(cartLib.removeFromCart(cart,p))
  const clearCart=(_)=>setCart([]);
  
  return (
    <BrowserRouter>
      <Header counter={cart.length} />
      <Switch>
        <Route path="/collection/:category/:productLink"><Product /></Route>
        <Route path="/collection/:category"><Collection addtocart={addToCart} /></Route>
        <Route path="/login"><Signin /></Route>
        <Route path="/thankyou"><ThankYou /></Route>
        <Route path="/cart"><Cart
         cart={cart}
         incrementCart={incrementCart}
         resetCart={clearCart}
         decrementCart={decrementCart}
         removeFromCart={removeFromCart}
          /></Route>
        <Route path="/checkout"><Checkout cart={cart} counter={cart.length} /></Route>

        <Route path="/"><Home /></Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
