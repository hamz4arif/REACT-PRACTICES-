import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }

  handleShow(id){
    this.setState({
        show: id
    })
  }
  
  render() {
   
   const {  location } = this.props
   let pathname = location.pathname
console.log('pathname', pathname);
   return (
    <div className="sidebar" id="sidebar">
      <div className="primary-nav">
        <nav role="navigation" className="menu">
          <Scrollbars
            style={{
              width: 250,
              height: "100%",
              backgroundColor: "rgb(121 145 165)",
            }}
            className="menu"
          >
            <Link to="/admin" className="logotype">
              LOGO<span>TYPE</span>
            </Link>
            <div className="overflow-container">
              <ul className="menu-dropdown">
                <li className="menu-title">Main</li>
                <li className={`${'/admin' === pathname ? 'active' : '' }`}>
                  <Link to="/admin"><i className="fe fe-home"></i>Dashboard</Link>
                </li>
                <li className={`${'/admin/appointments' === pathname ? 'active' : '' }`}>
                  <Link to="/admin/appointments"><i className="fe fe-layout"></i>Appointments</Link>
                </li>
                <li className={`${'/admin/specialities' === pathname ? 'active' : '' }`}>
                   <Link to="/admin/specialities"><i className="fe fe-users"></i>Specialities</Link>
                </li>
                <li className={`${'/admin/doctors' === pathname ? 'active' : '' }`}>
                
                  <Link to="/admin/doctors"> <i className="fe fe-user-plus"></i>Doctors</Link>
                </li>
                <li className={`${'/admin/patients' === pathname ? 'active' : '' }`}>
                
                  <Link to="/admin/patients"><i className="fe fe-user"></i>Patients</Link>
                </li>
                <li className={`${'/admin/reviews' === pathname ? 'active' : '' }`}>
                
                  <Link to="/admin/reviews"><i className="fe fe-star-o"></i>Reviews</Link>
                </li>
                <li className={`${'/admin/transaction' === pathname ? 'active' : '' }`}>
                  <Link to="/admin/transaction"><i className="fe fe-activity"></i>Transactions</Link>
                </li>
                <li className={`${'/admin/settings' === pathname ? 'active' : '' }`}>
                  <Link to="/admin/settings"> <i className="fe fe-vector"></i>Settings</Link>
                </li>

                <li>
                  <span className={`menu-hasdropdown ${'/admin/invoice-report' === pathname ? 'active' : '' }`}><a href="#0" onClick={()=>this.handleShow('report')}>Reports</a></span>
                  

                  <label title="toggle menu" htmlFor="settings">
                    <span className="downarrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </label>
                  <input
                    type="checkbox"
                    className="sub-menu-checkbox"
                    id="settings"
                  />

                  <ul className={`sub-menu-dropdown submenu ${ this.state.show === 'report' ? 'active' : '' } `}>
                    <li>
                      <Link to="/admin/invoice-report">Invoice Report</Link>
                    </li>
                  </ul>
                </li>
                <li className={`${'/admin/profile' === pathname ? 'active' : '' }`}>
                  <span className="icon">
                   
                  </span>
                  <Link to="/admin/profile"> <i className="fe fe-user-plus"></i>Profile</Link>
                </li>
                <li className={`menu-hasdropdown ${'/admin/login' === pathname || '/admin/register' === pathname || ''  === pathname ? 'active' : '' }`}>
                  <span className="icon">
                   
                  </span>

                  <a href="#0" onClick={()=>this.handleShow('authentication')}>  <i className="fe fe-document"></i>Authentication </a>

                  <label title="toggle menu" htmlFor="Authentication">
                    <span className="downarrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </label>
                  <input
                    type="checkbox"
                    className="sub-menu-checkbox"
                    id="Authentication"
                  />

                  <ul className={`sub-menu-dropdown submenu ${ this.state.show === 'authentication' ? 'active' : '' } `} >
                    <li>
                      <Link to="/admin/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/admin/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/admin/forgotPassword">Forgot Password</Link>
                    </li>
                    <li>
                      <Link to="/admin/lockscreen">Lock Screen </Link>
                    </li>
                  </ul>
                </li>
                <li className={`menu-hasdropdown ${'/admin/404' === pathname || '/admin/500' === pathname ? 'active' : '' }`}>
                  <a href="#0" onClick={()=>this.handleShow('error')}> <i className="fe fe-document"></i>Error Page</a>

                  <label title="toggle menu" htmlFor="errors">
                    <span className="downarrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </label>
                  <input
                    type="checkbox"
                    className="sub-menu-checkbox"
                    id="errors"
                  />

                  <ul className={`sub-menu-dropdown submenu ${ this.state.show === 'error' ? 'active' : '' } `}>
                    <li>
                      <Link to="/admin/404">404 Error</Link>
                    </li>
                    <li>
                      <Link to="/admin/500">500 Error</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Scrollbars>
        </nav>
      </div>
    </div>
  );
}
}

export default withRouter(SidebarNav);
