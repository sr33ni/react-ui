import React, {useState , Component} from 'react';
class Css_carousel extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className='carousel_tab'>


            <div className='carousel'>
              <input type="radio" className='radio-btn-one' name="spin"/>
              <input type='radio'className='radio-btn-two' name="spin"/>
              <input type='radio'className='radio-btn-three' name="spin"/>

              <div>
                <section>
                  <div className='carousel-div-one'>
                        home
                  </div>
                  <div className='carousel-div-two'>
                    home
                    </div>
                    <div className='carousel-div-three'>
                    home
                    </div>
                </section>
              </div>
            </div>
        </div>
    );
  }
}
export default Css_carousel;
