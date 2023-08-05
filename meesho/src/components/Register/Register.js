import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div id="register-body">
      <div id="register">
        <div id="image">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="register"
          />
        </div>
        <div id="register-main">
          <form>
            <h3>Sign Up to view your profile</h3>
            <div id="fields">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder=" Enter Email" />
              <input type="password" placeholder="Enter Password" />
              <input type="password" placeholder="Confirm Password" />
              <select>
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
            <div id="button">
              <button>Continue</button>
            </div>
          </form>
          <div id="sign-in">
            <span>
              Already Have an account? <b>Sign In</b>
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

export default Register;
