import React from "react";
import "./Navbar.css";
import logo from "./../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <div id="meesho-navbar">
        <div id="navbar">
          <div id="left">
            <div id="logo">
              <a href="./meesho-home.html">
                <img src={logo} alt="logo" />
              </a>
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
                <a href="./register.html">
                  <i class="fa-regular fa-user fa-1x"></i> <span>Profile</span>
                </a>
              </div>
              <div class="other">
                <a href="./wishlist.html">
                  <i class="fa-regular fa-heart"></i> <span>Wishlist</span>
                </a>
              </div>
              <div class="other">
                <a href="./cart.html">
                  <i class="fa-solid fa-cart-shopping"></i> <span>Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="meesho-sub-navbar">
        <div id="nav-items">
          <span>
            <p>Women Ethnic</p>
          </span>
          <span>
            <p>Women Western</p>
          </span>
          <span>
            <p>Men</p>
          </span>
          <span>
            <p>Kids</p>
          </span>
          <span>
            <p>Home & Kitchen</p>
          </span>
          <span>
            <p>Beauty & Health</p>
          </span>
          <span>
            <p>Jewellery & Accessories</p>
          </span>
          <span>
            <p>Bags & Footwear</p>
          </span>
          <span>
            <p>Electronics</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
