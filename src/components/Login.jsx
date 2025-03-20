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
    <>
        <div className="login-page">
            <div className="login">

                <form action="/action_page.php">
                    <div className="row">

                        <h2>Where Will Your Journey Take You?</h2>

                        
                        <div className="vl">
                            <span className="vl-innertext"></span>
                        </div>
                        

                        <div className="first-col">
                          <img src="Journey3.png" alt="Journey" className="login-logo" />
                          <div className="sign-up-blurb">
                            <p className="blurb-text">Don't Have an Account?</p>
                            <p className="blurb-text">Start Your Journey Today!</p>
                            <a href="#" className="sign-up">Sign Up!</a>
                          </div>
                        </div>

                        

                        <div className="col">
                            <div className="hide-md-lg">

                            </div>

                            <h2>Login</h2>
                            <input type="text" name="username" placeholder="Username" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <input type="submit" value="Login" />
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                    </div>
                </form>
            </div>
            
            
        </div>
    </>
  );
}

export default LoginPage;
