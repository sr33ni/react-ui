
import './pooper-style.css';
import React, {useState , Component} from 'react';


const pooper = {
  backgroundColor: "DodgerBlue",
  height: "100vh",
  display: "flex",
  alignItems: "center",
}
const default_btn = {
  height: "30px",
  borderRadius: "5px",
  width: "fit-content",
  border: "1px solid #000",
  backgroundColor: "green",
  cursor: "pointer",
}
const t_clamp = {
  display: "-webkit-box",
  webkitLineClamp: "3",
  webkitBoxOrient: "vertical",  
  overflow: "hidden",
}
// function Pooper() {
//   const handleClick = () => {
//     alert("hjhjkh");
//   }

//   return (
//     <div style={pooper}>
//     <div>
//       hello pooper
//     </div>
//     <button style={default_btn} onClick={handleClick}>
//       bello
//     </button>
//     </div>

//   );
// }

class Pooper extends React.Component{
  constructor(props) {
    super(props);
    this.hello = "red"
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isActive: false,
    };
  }
  // customSetState = (newState) => {
  //   this.setState({
  //     ...this.state,
  //     ...newState,
  //   });
  // };
  handleClick = () => {
    alert("red")
   }
  render(){
    return(
      <div style={pooper}>
        <p style={t_clamp}>
        Minim deserunt Lorem fugiat labore aliqua sunt irure ex duis laboris dolore et. Consectetur tempor quis ex cillum dolore labore deserunt sint tempor nisi consequat. Occaecat incididunt adipisicing officia enim irure eu eiusmod do sit enim in deserunt excepteur. Incididunt amet mollit officia commodo sit proident ex nisi. Consectetur Lorem deserunt exercitation Lorem tempor non aliqua irure nulla cillum deserunt exercitation incididunt amet. Commodo qui deserunt non est mollit tempor aute ex pariatur excepteur minim et enim. Aliqua in occaecat occaecat aliquip sint irure sint culpa minim occaecat proident.

Do nostrud exercitation ut sit adipisicing. Cupidatat enim veniam duis do. Labore Lorem aute veniam aute id ea pariatur anim exercitation officia adipisicing.

Consequat ex eu aute consequat ad velit amet exercitation aliquip mollit ipsum officia amet. Sit minim sint occaecat voluptate sint cupidatat velit. Consectetur sunt laborum fugiat non magna ex eiusmod sint velit quis. Duis magna eiusmod proident ad ut enim do nostrud qui laborum commodo excepteur. Esse ipsum eu voluptate non incididunt sit magna amet do sint. Est fugiat reprehenderit laborum amet.

Tempor sunt minim occaecat ut consequat sint sunt nisi laboris qui duis. Officia dolore excepteur sunt commodo ad esse esse. Et aliquip ipsum sint ut ad voluptate minim.

Dolor pariatur mollit non proident minim occaecat reprehenderit exercitation ullamco qui adipisicing amet. Qui dolor quis occaecat eu deserunt. Lorem laboris nulla pariatur incididunt exercitation minim eiusmod cupidatat dolore. Id consequat sunt anim ex cillum officia proident et nisi aliqua do sunt deserunt. Sit duis reprehenderit ipsum ea nisi deserunt. Sit non Lorem fugiat commodo eu enim veniam labore minim.

Ut magna laboris et ad in exercitation laboris minim aliqua Lorem sit aliquip amet et. Irure consectetur ad minim dolore et laborum do commodo mollit dolore. Consequat veniam ea culpa commodo minim adipisicing do irure.

Adipisicing pariatur sit deserunt labore Lorem quis aute laboris exercitation. Laboris duis dolor pariatur culpa. Aute Lorem culpa nisi tempor ut in voluptate nisi ad mollit adipisicing est proident. Eiusmod irure cillum sit pariatur cillum.

Laboris reprehenderit ex quis deserunt deserunt minim nulla exercitation eiusmod deserunt Lorem qui. Consectetur cupidatat esse eu officia esse excepteur sint incididunt sunt ipsum est ipsum eu nisi. Exercitation dolore dolore dolore pariatur occaecat do eu ipsum adipisicing in deserunt ullamco dolore. Lorem Lorem aliquip anim ipsum anim anim laboris esse adipisicing adipisicing. Nulla ex veniam nostrud enim in sit nulla ipsum aliquip.

Proident irure velit consectetur velit esse deserunt. Exercitation eiusmod et incididunt commodo nisi eu. Nostrud laboris magna irure eu nulla. Sunt consequat sunt minim eu sint et incididunt sit consectetur. Qui adipisicing esse sunt nulla eu culpa ea tempor aliquip et consequat irure. Ea duis quis sint aute esse veniam Lorem. Officia culpa excepteur id magna aliquip excepteur pariatur id incididunt elit laboris excepteur cupidatat.

Fugiat ad eu aliqua adipisicing Lorem ea pariatur aute dolore Lorem enim nisi eu. Elit reprehenderit culpa cupidatat quis dolore cillum aute nulla enim deserunt commodo. Id cillum sint eiusmod officia incididunt minim nostrud reprehenderit sit commodo quis. Cillum labore commodo ea aliquip exercitation excepteur sint aute laborum ad ad. Eiusmod adipisicing voluptate labore eu aute aliquip aliqua sint anim aute enim dolor. Excepteur consectetur magna labore duis quis magna in excepteur mollit sint enim exercitation sunt.
        </p>
        <button style={default_btn} onClick={this.handleClick}>{this.hello}</button>
      </div>
    );
  }
}
export default Pooper;
