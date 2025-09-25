

// import React, { Component , array, object } from 'react';

// class ClickableComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: null
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(index) {
//     this.setState({ activeIndex: index });
//   }

//   render() {
//     return (
//       <section>
//       <h1>Mapping arrays/objects to jsx</h1>
//       <h2>Mapping array</h2>
//       <ul>
//         {array.map(
//           (item) =>
//             <li key={item}>{item}</li>
//         )}
//       </ul>
//       <h2>Mapping objects</h2>
//       <ul>
//         {Object.keys(object).map(
//           (objKey) =>
//             <li key={objKey}>{object[objKey]}</li>
//         )}
//       </ul>
//     </section>
//     );
//   }
// }



// export default ClickableComponent;

import React,{ Component }  from 'react'; 
   
class ClickableComponent extends Component { 
  
  constructor(props) { 
    super(props); 
    this.handleClick.bind(this); 
  } 
  
  handleClick = () => { 
    // Simply call the setStateOfParent function from  
    // prop and pass required argument 
    this.props.setStateOfParent("Geeks For Geeks"); 
  } 
  
  render() { 
    return ( 
        <button onClick={this.handleClick}>Reveal Title</button> 
    ); 
  } 
} 
  
export default ClickableComponent;

