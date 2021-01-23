import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './common/header';
import Footer from './common/footer';
import Checkout from './checkout/Checkout';
import Home from './home';
import Signin from './sign-in/Signin';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login"><Signin /></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
