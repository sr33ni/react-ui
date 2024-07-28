
import React, {useState , Component} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
class Contact_page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      subscribeEmail : "",
      addClass:"",
      email : "",
      subscribe:""
      
    }

  }
  handlechange=(ee) => {
    ee.preventDefault();
    this.setState({
      [ee.target.name]: ee.target.value,
      addClass: "alert-box",
    })
  }
  handlechangeclose=() => {
    this.setState({
      addClass: "alert-box event-close"
    })
  }

  render(){
    return(
        <div className='contact_detail_tab'>
            <h1>Contact</h1>
            <a>Welcome to contact page.</a>
            <div className='sub-tab-nav'>
            <nav>
                  <NavLink to="faq" >Faq</NavLink>
                  <NavLink to="moreinfo">Moreinfo</NavLink>
            </nav>
            <Outlet />
            </div>
            <form>
              <div>
                <label className='tooltip' data-tooltip-txt="*">Name</label>
                <span>
                  <input name="subscribeEmail" value={this.state.subscribeEmail} onChange={(even)=>{this.handlechange(even)}}/>
                  <label for="emailText" className={this.state.addClass}>
                    <div className='alert-header'>alert !<div className='alert-close' onClick={(event)=>{this.handlechangeclose(event)}} ></div></div>
                    {this.state.subscribeEmail}</label>
                  <input name="email" value={this.state.email} onChange={(e)=>{this.handlechange(e)}}/>
                  <p>{this.state.email}</p>
                  <input name="subscribe" value={this.state.subscribe} onChange={(e)=>{this.handlechange(e)}}/>
                  <p>{this.state.subscribe}</p>
                </span>
                <button onClick={(even)=>{this.handlechange(even)}}>
                  alert!
                </button>
              </div>
            </form>
        </div>
    );
  }
}
export default Contact_page;
