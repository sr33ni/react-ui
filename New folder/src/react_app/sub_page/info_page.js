
import React, {useState , Component} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
class Info_page extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='faq_tab'>
            <h1>Info</h1>
        </div>
    );
  }
}
export default Info_page;
