import React, { useState, useRef  } from "react"
import logo from './assets/logo-frog.svg'; 

const Login_page = () => {
    const usernameRegex =  /^[a-zA-Z0-9._]{3,16}$/;
    const [username , setUsername] = useState("")
    const [usernameError , setusernameError] = useState(false)


    const handleUsername = (event) => {

    let inputTarget = event.target.value;
        if(usernameRegex.test(inputTarget) && inputTarget != ""){
            event.target.classList.add("valid")
            setUsername("checked")
            setusernameError(false)
        }
        else{
            setUsername(<marquee>Username must be 3-16 chars, no edge/consecutive _ or .</marquee>)
            event.target.classList.remove("valid")
            setusernameError(true)
        }
        
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    const [password , setPassword] = useState("")
    const [passwordError , setpasswordError] = useState(false)

    const handlePassword = (event) => {
    let inputTarget = event.target.value;
        if(passwordRegex.test(inputTarget) && inputTarget != "" ){
            event.target.classList.add("valid")
            setPassword("checked")
            setpasswordError(false)
        }
        else{
            setPassword(<marquee>Password must be 8-20 characters, with uppercase, lowercase, number, and special character.</marquee>)
            event.target.classList.remove("valid")
            setpasswordError(true)
        }
        
    }

    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(usernameError , passwordError , username , password);
    if (usernameError || passwordError || username === "" || password === "" ) {
        alert("Please fix the errors before submitting.");
        return;
    } 
    else{
        alert("Form submitted successfully!");
    }
}

    const [viewpassword , viewsetPassword] = useState("password")
    const viewPassword = () =>{
        if(viewpassword == "password"){
            viewsetPassword("text")
        }
        else{
            viewsetPassword("password")
        }
        
    }


    return(
        <div className="login-section">
            <section>
            <h1>Welcome back</h1>
            <form className="login-container" onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                <input id="username" onKeyUp={(e)=>{handleUsername(e)}} type="text" placeholder="username"/>
                <span className="error-span">{username}</span>
                </div>
                <div>
                <input id="password"  type={viewpassword} onKeyUp={(e)=>{handlePassword(e)}}  placeholder="password"/>
                <a onClick={(e)=>{viewPassword(e)}}>view</a>
                <span className="error-span">{password}</span>
                </div>
                <input value={"Submit"} type="submit" />
            </form>
            </section>

        </div>
    )
}

export default Login_page