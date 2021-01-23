import React, { Component } from 'react';
import HomeSearch from './search';
import HomeClinic from './clinic';
import HomeBookDoctor from './bookDoctor';
import HomeFeatures from './features';
import HomeBlog from './blog';

class Home extends Component{
    render(){
        return(
            <div>
 <div className="main-wrapper">
  <HomeSearch />  
  <HomeClinic />
  <HomeBookDoctor />
  <HomeFeatures />
  <HomeBlog/>
       </div>
    </div>
        );
    }
}
export default Home;