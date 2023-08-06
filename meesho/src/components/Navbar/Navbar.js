import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isShowSidePopup, setIsShowSidePopup] = useState(false);
  const naviagateTo = useNavigate();

  const openSidePopup = () => {
    setIsShowSidePopup(true);
  };

  const closeSidePopup = () => {
    setIsShowSidePopup(false);
  };

  return (
    <>
      <div id="meesho-navbar">
        <div id="navbar">
          <div id="left">
            <div id="logo">
              <p onClick={() => naviagateTo("/")}>
                <img src={logo} alt="logo" />
              </p>
            </div>
            <div id="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Try, Saree, Kurti or Search by Product Code"
                type="text"
              />
            </div>
          </div>
          <div id="right">
            <div id="download">
              <i class="fa-solid fa-mobile-screen-button fa-lg"></i>
              <span>Download App</span>
            </div>
            <div id="supplier">
              <span>Become a Supplier</span>
            </div>
            <div id="others">
              <div class="other">
                <p onMouseOver={openSidePopup} onMouseLeave={closeSidePopup}>
                  <i class="fa-regular fa-user fa-1x"></i> <span>Profile</span>
                </p>
              </div>
              <div class="other">
                <p>
                  <i class="fa-regular fa-heart"></i> <span>Wishlist</span>
                </p>
              </div>
              <div class="other">
                <p onClick={() => naviagateTo("/cart")}>
                  <i class="fa-solid fa-cart-shopping"></i> <span>Cart</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="meesho-sub-navbar">
        <div id="nav-items">
          <span>
            <p onClick={() => naviagateTo("/women-ethnic")}>Women Ethnic</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/women-western")}>Women Western</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/mens")}>Men</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/kids")}>Kids</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/home-kitchen")}>Home & Kitchen</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/beauty-health")}>Beauty & Health</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/jewellery-accessories")}>
              Jewellery & Accessories
            </p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/bags-footwear")}>Bags & Footwear</p>
          </span>
          <span>
            <p onClick={() => naviagateTo("/electronics")}>Electronics</p>
          </span>
        </div>
      </div>

      {/* ------------------------------login-register-popup--------------------------------------- */}

      {isShowSidePopup && (
        <div
          class="modal-box"
          onMouseOver={openSidePopup}
          onMouseLeave={closeSidePopup}
        >
          <div class="box" id="welcome">
            <h3>Welcome</h3>
            <span>To access account and manage orders</span>
            <h3>Hello,</h3>
            <p>Santosh</p>
            <div id="button">
              <button onClick={() => naviagateTo("/login")}>
                SINGIN / SIGNUP
              </button>
            </div>
            <div id="button">
              <button onClick={() => naviagateTo("/profile")}>PROFILE</button>
            </div>
            <div id="button">
              <button onClick={() => naviagateTo("/add-product")}>
                ADD PRODUCT
              </button>
            </div>
            <div id="button">
              <button>LOGOUT</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
