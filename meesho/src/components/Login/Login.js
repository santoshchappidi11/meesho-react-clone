import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";

const Login = () => {
  const { Login } = useContext(AuthContexts);
  const naviagateTo = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChangeValues = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginData.email && loginData.password) {
      const allUsers = JSON.parse(localStorage.getItem("users"));
      let flag = false;
      for (let i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == loginData.email &&
          allUsers[i].password == loginData.password
        ) {
          flag = true;
          // localStorage.setItem("current-user", JSON.stringify(allUsers[i]));
          Login(allUsers[i]);
          setLoginData({ email: "", password: "" });
          naviagateTo("/");
          toast.success("Login successfull!");
          break;
        }
      }

      if (flag == false) {
        toast.error("Invalid email or password!");
        setLoginData({ email: "", password: "" });
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
                placeholder=" Enter Email"
                value={loginData.email}
                onChange={handleChangeValues}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={loginData.password}
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
