import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContexts } from "../Context/AuthContext";

const Login = () => {
  const { state, Login } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (state?.currentUser?.name) {
      navigateTo("/");
    }
  }, [state, navigateTo]);

  const handleChangeValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8000/login", {
        userData,
      });
      if (response.data.success) {
        Login(response.data);
        toast.success(response.data.message);
        setUserData({ email: "", password: "" });
        navigateTo("/");
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("Please fill all the fields!");
    }
  };

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
          <form onSubmit={handleLoginSubmit}>
            <h3>Sign In to view your profile</h3>
            <div id="fields">
              <input
                type="email"
                name="email"
                placeholder=" Enter Your Email"
                value={userData.email}
                onChange={handleChangeValues}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={userData.password}
                onChange={handleChangeValues}
              />
            </div>
            <div id="button">
              <button type="submit">Continue</button>
            </div>
          </form>
          <div id="sign-in">
            <span>
              Don't Have an account?{" "}
              <b onClick={() => navigateTo("/register")}>Sign Up</b>
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
