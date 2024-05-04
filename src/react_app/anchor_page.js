
import React, {state , useState , Component, Suspense} from 'react';
import Home_page from './sub_page/home_page';
import About_page from './sub_page/about_page';
import './style.css'
import Contact_page from './sub_page/contact_page';
import Main_nav from './sub_page/main-nav';
import Header_section from './sub_page/header_section';
import { createBrowserRouter, Router, Routes, Route, NavLink, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Page_404 from './sub_page/page_404';
import Info_page from './sub_page/info_page';
import Faq_page from './sub_page/faq-page';
class Anchor_page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {    
     
    };

  }

  render(){
    const Router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Main_nav />}>

        <Route exact path="/" element={<Home_page />} />
        <Route exact path="/about" element={<About_page />} />
        <Route exact path="contact" element={<Contact_page />}> 
        <Route exact path="faq" element={<Faq_page />} /> 
        <Route exact path="moreinfo" element={<Info_page />} /> 
        </Route> 
        <Route exact path="*" element={<Page_404 />} /> 
                  
        </Route> 
      )
    )
    return(
        <div>
           <Header_section />
          {/*
            <section className="anchor_section">
                <div className='nav-bar'>
                  <NavLink activeClassName='active' to="/" >Home</NavLink>
                  <NavLink activeClassName='active' to="/about"> About</NavLink>
                  <NavLink activeClassName='active' to="/contact">Contact Us</NavLink>
                </div>



              <Suspense fallback={ "Lazy loading pages ..." }>
                <Routes>   
                <Route exact path="/" element={<Home_page />} />
                <Route exact path="/about" element={<About_page />} />
                <Route exact path="/contact" element={<Contact_page />} /> 
                <Route exact path="*" element={<div className='page-notfound'>hello</div>} />            
                </Routes> 
                </Suspense>
                
            </section> */}
            <RouterProvider router={Router} />
        </div>
    );
  }
}
export default Anchor_page;

