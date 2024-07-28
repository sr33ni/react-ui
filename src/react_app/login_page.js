import React, { useState } from "react"

const Login_page = () => {
    const [color, setColor] = useState("blue")

    const onclickhandle = () => {
        setColor(!color)
    }
    return(
        <div className="login-container">
            <h1> hello {color ? "red" : "pink"}man </h1>
            <button onClick={onclickhandle} className={(color ? "jkl" : "red")}>sss</button>
        </div>
    )
}

export default Login_page