
import React, {useState , Component} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
class Contact_page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstname : "",
      errors: {
        nameerror : ""
      }
    }
  }
  namechnage = (e) =>{
    this.setState({
      firstname : e.target.value,
      nameerror : ""
    })
  }
  onClick = () =>{
    let errors = this.state.errors
    if (
      this.state.firstname
    ){
      
    }
  }
  render(){
    return(
        <div className='contact_detail_tab'>
            <h1>Contact</h1>
            <p>Welcome to contact page.</p>
            <div className='sub-tab-nav'>
            <nav>
                  <NavLink to="faq" >Faq</NavLink>
                  <NavLink to="moreinfo">Moreinfo</NavLink>
            </nav>
            <Outlet />
            </div>
            <form>
              <div>
                <label>Name</label>
                <span>
                  <input onChange={this.state.namechnage}/>
                </span>
              </div>
            </form>
        </div>
    );
  }
}
export default Contact_page;
