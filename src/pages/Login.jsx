//rafce
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => SetEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            required
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Need to SignUp? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
