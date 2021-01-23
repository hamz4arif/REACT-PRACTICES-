import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Collection from "./collection";
import Product from "./product";
import Checkout from './checkout/Checkout';
import Signin from './sign-in/Signin';
import Header from "./common/header";
import Footer from './common/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collection">
          <Collection />
        </Route>
        <Route exact path="/collection/:category">
          <Collection />
        </Route>
        <Route path="/collection/:category/:productLink">
          <Product />
        </Route>
        <Route path='/checkout'>
        <Checkout />
        </Route>
        <Route path='/login'>
          <Signin />
        </Route>
        <Route path="*" children={<h1>No page Found</h1>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
