
import React, {useState , Component} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
class Main_nav extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className="anchor_section">
        <div className='nav-bar'>
            <NavLink activeClassName='active' to="/" >Home</NavLink>
            <NavLink activeClassName='active' to="/about"> About</NavLink>
            <NavLink activeClassName='active' to="/contact">Contact Us</NavLink>
      </div>

      <Outlet />
        </div>


    );
  }
}
export default Main_nav;
