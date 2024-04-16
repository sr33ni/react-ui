
import React, {state , useState , Component} from 'react';
import Home_page from './sub_page/home_page';
import About_page from './sub_page/about_page';
import './style.css'
import Contact_page from './sub_page/contact_page';
import Header_section from './sub_page/header_section';
class Anchor_page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ishomeClassActive: true,
      isaboutClassActive: false,
      iscontactClassActive: false,

      isTabActive: "anchor_section active_home_tab",
      
  };
  }
  hometoggleClass = () => {
    this.setState({
      ishomeClassActive: !this.state.ishomeClassActive,
      isaboutClassActive: false,
      iscontactClassActive: false,
      isTabActive: "anchor_section active_home_tab",
    });
};
abouttoggleClass = () => {
  this.setState({
      isaboutClassActive: !this.state.isaboutClassActive,
      ishomeClassActive: false,
      iscontactClassActive: false,
      isTabActive: " anchor_section active_about_tab",
  });
};
contacttoggleClass = () => {
  this.setState({
    iscontactClassActive: !this.state.iscontactClassActive,
    isaboutClassActive: false,
    ishomeClassActive: false,
    isTabActive: "anchor_section active_contact_tab",
  });
};

  render(){
    return(
        <div>
          <Header_section />
            <section className={this.state.isTabActive }>
                <ul>
                  <li className={this.state.ishomeClassActive ? "active" : ""} onClick={this.hometoggleClass}><a>Home</a></li>
                  <li className={this.state.isaboutClassActive ? "active" : ""} onClick={this.abouttoggleClass}><a>About</a></li>
                  <li className={this.state.iscontactClassActive ? "active" : ""} onClick={this.contacttoggleClass}><a>Contact Us</a></li>
                </ul>
                  <Home_page />
                  <About_page />
                  <Contact_page />
            </section>
        </div>
    );
  }
}
export default Anchor_page;
