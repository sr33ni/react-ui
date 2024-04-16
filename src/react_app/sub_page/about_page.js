
import React, {useState , Component} from 'react';
import Details_component from './detail_component';
class About_page extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='about_detail_tab'>
            <h1>About</h1>
            <p>Welcome to about page.</p>
            <Details_component />
        </div>
    );
  }
}
export default About_page;
