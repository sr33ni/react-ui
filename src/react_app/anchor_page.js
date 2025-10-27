import React, {state , useState , Component, Suspense} from 'react';
import Home_page from './sub_page/home_page';
import Grid_page from './sub_page/grid_page';
import './style.css';
import Contact_page from './sub_page/contact_page';
import Main_nav from './sub_page/main-nav';
import { createBrowserRouter, Router, Routes, Route, NavLink, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Page_404 from './sub_page/page_404';
import Info_page from './sub_page/info_page';
import Faq_page from './sub_page/faq-page';
import Login_page from './login_page';
import Sample_page from './sample_page';
import Counter from './sub_page/Counter';
import ProtectedRoute from './components/ProtectedRouter.jsx';
import ChakraUI from './sub_page/ChakraUI.js';


class Anchor_page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {    
     
    };

  }

  render(){
    const Router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route exact path="login" element={<Login_page />} /> 
            <Route path='/' element={<><Main_nav /><ProtectedRoute /></>}>
            <Route exact path="/home" element={<Home_page />} />
            <Route exact path="/grid" element={<Grid_page />} />
            <Route exact path="contact" element={<Contact_page />}/> 
            <Route exact path="faq" element={<Faq_page />} /> 
            <Route exact path="moreinfo" element={<Info_page />} /> 
            <Route exact path="*" element={<Page_404 />} /> 
            <Route exact path="/sample" element={<Sample_page />} /> 
            <Route exact path="/Counter" element={<Counter/>} /> 
            <Route exact path="/ChakraUI" element={<ChakraUI/>} /> 
                    
          </Route> 
        </Route>
      )
    )
    return(
        <>     
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
        </>
    );
  }
}
export default Anchor_page;

