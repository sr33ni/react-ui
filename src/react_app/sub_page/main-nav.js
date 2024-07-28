
import React, {useState , Component} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import homeicon from '../assets/house-blank.svg';
import charticon from '../assets/chart-tree-map.svg';
import fileicon from '../assets/file.svg';
class Main_nav extends React.Component{
  constructor(props) {
    super(props);
  }
  homeicon={
    maskImage: `url(${homeicon})`,
    }
  charticon={
    maskImage: `url(${charticon})`,
  }
fileicon={
    maskImage: `url(${fileicon})`,
  }
  render(){
    return(
        <div className="anchor_section">
        <div className='nav-bar'>
            <NavLink to="/" ><span className='span-icon' style={this.homeicon}></span><span>Home</span></NavLink>
            <NavLink to="/grid" ><span className='span-icon'style={this.charticon}></span><span>Component</span></NavLink>
            <NavLink to="/contact"><span className='span-icon' style={this.fileicon}></span><span>Contact</span></NavLink>
            <NavLink to="/form"><span className='span-icon' style={this.fileicon}></span><span>Contact</span></NavLink>
            <NavLink to="/fg"><span className='span-icon' style={this.fileicon}></span><span>Contact</span></NavLink>
      </div>

      <Outlet />
        </div>


    );
  }
}
export default Main_nav;
