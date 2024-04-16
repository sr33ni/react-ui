
import React, {useState , Component} from 'react';
class Home_page extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='home_detail_tab'>
            <h1>Home</h1>
            <p>Welcome to home page.</p>
        </div>
    );
  }
}
export default Home_page;
