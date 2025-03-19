import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylings/Login.css"; 

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Simulate authentication (Replace this with an API call to your backend)
    if (email === "test@example.com" && password === "password123") {
      navigate("/dashboard"); // Redirect to a protected page
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>

            <div className="login-field-row">
                <div className="login-field">
                    <label className="login-label">Username</label>
                    <div className="login-control">
                    <input
                        className="login-input"
                        type="text"
                        placeholder="Username or Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
            </div>
        

                <div className="login-field">
                    <label className="login-label">Password</label>
                    <div className="login-control">
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                </div>
            </div>

            

            <div className="login-field">
                <div className="login-button-container">
                    <button className="login-button is-primary">Login</button>
                </div>
            </div>

            <div className="forgot-password">
                <a>Forgot Password?</a>
            </div>

            <div>
                <p>Don't have an account? <a>Sign up!</a></p>
                
            </div>
                
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
