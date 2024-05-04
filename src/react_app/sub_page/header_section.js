
import React, {useState , Component} from 'react';
import logo from '../assets/logo-frog.svg'; 
import searchicon from '../assets/magnifying-glass-solid.svg';

class Header_section extends React.Component{
  constructor(props) {
    super(props);
  }
searchIcon={
  backgroundImage: `url(${searchicon})`
}
  render(){
    return(
        <div className='header-section'>
            <section className='logo-container'>
                <div className='img-container'><img src={logo} alt='red'/>
                </div>
                <span className='logo-name'>frog</span>
            </section>
            <section className='search-container'>
              <input type='search'style={this.searchIcon}/>
              <span className='search-icon'>
              </span>
            </section>
        </div>
    );
  }
}
export default Header_section;
