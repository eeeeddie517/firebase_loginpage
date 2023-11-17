//rafce
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
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
        <h1>SignUp Page</h1>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <button type="submit" className="signup-button">
            SignUp
          </button>
        </form>
        <p>
          Need to Login? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
