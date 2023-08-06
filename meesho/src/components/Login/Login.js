import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const naviagateTo = useNavigate();

  return (
    <div id="login-body">
      <div id="login">
        <div id="image">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="login"
          />
        </div>
        <div id="login-main">
          <form>
            <h3>Sign In to view your profile</h3>
            <div id="fields">
              <input type="email" placeholder=" Enter Email" />
              <input type="password" placeholder="Enter Password" />
            </div>
            <div id="button">
              <button>Continue</button>
            </div>
          </form>
          <div id="sign-in">
            <span>
              Don't Have an account?{" "}
              <b onClick={() => naviagateTo("/register")}>Sign Up</b>
            </span>
          </div>
          <div id="policy">
            <span>
              By continuing, you agree to Meesho’s
              <b>Terms & Conditions</b> and <b>Privacy Policy</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
