
import React, {useState , Component, useEffect} from 'react';
const Home_page = ()=>{

  const [sample, setSample] = useState("testing");
  const [active, setActive] = useState("active");

  //   useEffect(
  //   ()=> {handleClick()},["testing"]
  // )

  const handleClick = ()=> {
    if(sample == "testing"){
      setSample("working")
      setActive("active")
    }else{
      setSample("testing")
      setActive("")
    }
  }


    return(
              <div className='home_detail_tab'>
            <h1>Home</h1>
            <p>Welcome to home page.</p>
            <p className={active}>{sample}</p>

            <button onClick={()=> {handleClick()}}>
              Click me
            </button>
        </div>
    )
  }
export default Home_page;
