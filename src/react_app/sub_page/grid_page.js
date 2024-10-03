
import React, {useState , Component} from 'react';
import Details_component from './detail_component';
class Grid_page extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='grid_detail_tab'>
            <h1>Component</h1>
            <p>Welcome to Component page.</p>
            <Details_component />

            <div className='name'>

            </div>
        </div>
    );
  }
}
export default Grid_page;
