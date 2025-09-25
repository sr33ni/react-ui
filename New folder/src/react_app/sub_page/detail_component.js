
import React, {useState , Component} from 'react';
class Details_component extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive : "sec-header-bubble"
    }
  }
  active = (ttt) =>{
    this.setState({
      isActive : "sec-header-bubble active"
  
  })
if(ttt == true){
  this.setState({
    isActive : "sec-header-bubble active"
})
}
else{
  this.setState({
    isActive : "sec-header-bubble"

})
}
}
  render(){
    return(
        <div className='detail_tab'>
            <div className='detail_tab_sec sec-header'> 
                <div className={this.state.isActive} onClick={this.active}>section-one</div>
                <div className={this.state.isActive} onClick={this.active}>section-two</div>
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
