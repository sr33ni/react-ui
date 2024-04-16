
import React, {useState , Component} from 'react';
import logo from '../assets/logo-frog.svg'; 
class Header_section extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='header-section'>
            <section className='logo-container'>
                <div className='img-container'><img src={logo} alt='red'/>
                </div>
                <span className='logo-name'>frog</span>
            </section>
        </div>
    );
  }
}
export default Header_section;
