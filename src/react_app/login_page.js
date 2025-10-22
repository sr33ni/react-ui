import React, { useState, useRef } from "react"
import logo from './assets/logo-frog.svg';
import { useNavigate } from "react-router-dom";

const Login_page = () => {

      const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Example: verify username and password
        if (username === "admin" && password === "12345") {
            // Store user info (or token) in localStorage
            localStorage.setItem("user", JSON.stringify({ username }));
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login-section">
            <section>
                <h1>Welcome back</h1>
                <form className="login-container" onSubmit={handleLogin} noValidate>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span className="error-span">{username}</span>
                    </div>
                    <div>
                        <input id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a >view</a>
                        <span className="error-span">{password}</span>
                    </div>
                    <input value={"Submit"} type="submit" />
                </form>
            </section>

        </div>
    )
}

export default Login_page