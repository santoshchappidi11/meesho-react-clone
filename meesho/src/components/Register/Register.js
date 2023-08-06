import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const naviagateTo = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
    cart: [],
  });

  const handleChangeValues = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.role
    ) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      allUsers.push(registerData);
      localStorage.setItem("users", JSON.stringify(allUsers));
      setRegisterData({ name: "", email: "", password: "", role: "Buyer" });
      naviagateTo("/login");
      toast.success("Registered successfully!");
    } else {
      toast.error("Please fill all the details!");
    }
  };

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
          <form onSubmit={handleRegisterSubmit}>
            <h3>Sign Up to view your profile</h3>
            <div id="fields">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={registerData.name}
                onChange={handleChangeValues}
              />
              <input
                type="email"
                name="email"
                placeholder=" Enter Email"
                value={registerData.email}
                onChange={handleChangeValues}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={registerData.password}
                onChange={handleChangeValues}
              />
              <select
                name="role"
                value={registerData.role}
                onChange={handleChangeValues}
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
            <div id="button">
              <button type="submit">Continue</button>
            </div>
          </form>
          <div id="sign-in">
            <span>
              Already Have an account?{" "}
              <b onClick={() => naviagateTo("/login")}>Sign In</b>
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
