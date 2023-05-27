import React from "react";
import { Link } from "react-router-dom";
import Class from "../../styles/Login.module.css"

function Login() {
  return (
    <div className={Class.container}>
      <h5>Login to FamilyMart</h5>
      <form action="">
        <div className={Class.input}>
          <label htmlFor="">Enter Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className={Class.input}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button type="submit">Login</button>
      </form>
      <span>Don't have an account? <Link to="/auth/signup">Sign up</Link></span>
    </div>
  );
}

export default Login;
