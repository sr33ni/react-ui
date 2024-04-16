
import React, {useState , Component} from 'react';
class Details_component extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='detail_tab'>
            <div className='detail_tab_sec sec-header'> 
                <div className='sec-header-bubble'>section-one</div>
                <div className='sec-header-bubble'>section-two</div>
                <div className='sec-header-bubble'>section-three</div>
                <div className='sec-header-bubble'>section-to</div>
                <div className='sec-header-bubble'>section-to</div>
                <div className='sec-header-bubble'>section-to</div>
                <div className='sec-header-bubble'>section-to</div>
            </div>
            <div className='detail_tab_sec sec-one'> 
                <div className='detail_tab_sec sub_sec-one'></div>
                <div className='detail_tab_sec sub_sec-two'></div>
            </div>
            <div className='detail_tab_sec sec-two'>

            </div>
        </div>
    );
  }
}
export default Details_component;
