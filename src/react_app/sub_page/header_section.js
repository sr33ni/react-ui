
import React, {useState , Component} from 'react';
import logo from '../assets/logo-frog.svg'; 
import searchicon from '../assets/magnifying-glass-solid.svg';
import { useNavigate } from "react-router-dom";



const Header_section = () => {

  const searchIcon = {
    backgroundImage: `url(${searchicon})`
  }

      const navigate = useNavigate();
     const handleLogout = () => {
      localStorage.removeItem("user");
      navigate("/login");
    }
  return(

            <div className='header-section'>
            <section className='logo-container'>
                <div className='img-container'><img src={logo} alt='red'/>
                </div>
                <span className='logo-name'>frog</span>
            </section>
            <section className='search-container'>
              <input type='search'style={searchIcon}/>
              <span className='search-icon'>
              </span>
            </section>
            <button className='logout-btn' onClick={() => handleLogout()}>Logout</button>
        </div>
  )

}
export default Header_section;