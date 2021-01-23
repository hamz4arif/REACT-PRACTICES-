import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Collection from "./collection";
import Product from "./product";
import Cart from "./cart";
import Checkout from "./checkout/Checkout";
import Signin from "./sign-in/Signin";
import Header from "./common/header";
import Footer from "./common/footer";
import ScrollToTop from "./common/scroll-to-top";
import cartLib from "./utils/cart";

function App() {
  const [cart, setCart] = useState([]);
  const clearCart = (_) => setCart([]);
  const addToCart = (p) => setCart(cartLib.addToCart(cart, p));
  const incrementCart = (p) => setCart(cartLib.incrementCart(cart, p))
  const decrementCart = (p) => setCart(cartLib.decrementCart(cart, p))
  const removeFromCart = (p) => setCart(cartLib.removeFromCart(cart, p))

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header counter={cart.length} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={["/collection", "/collection/:category"]}>
          <Collection addToCart={addToCart} />
        </Route>
        <Route path="/collection/:category/:productLink">
          <Product addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </Route>
        <Route path="/checkout">
          <Checkout cart={cart} />
        </Route>
        <Route path="/login">
          <Signin />
        </Route>
        <Route path="*" children={<h3>No page Found</h3>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;