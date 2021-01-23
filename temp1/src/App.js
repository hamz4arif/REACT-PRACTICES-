import logo from './logo.svg';
import './App.css';
import Header from './project/header';
import { Route, Switch } from 'react-router-dom';
import Home from './project/home';
import User from './project/profile/sidebar';
import About from './project/about';
import IndexUser from './project/profile/indexProfile';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path="/about"><About/></Route>
        <Route path="/user"><IndexUser/></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
