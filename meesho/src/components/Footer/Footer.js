import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-sec-1">
        <h2>Shop Non-Stop on Meesho</h2>
        <p>
          Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery
        </p>
        <div id="stores">
          <div id="play-store">
            <img
              src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
              alt="playstore"
            />
          </div>
          <div id="apple-play">
            <img
              src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
              alt="appleplay"
            />
          </div>
        </div>
      </div>
      <div id="footer-sec-2">
        <div>
          <h4>Careers</h4>
          <h4>Become a Supplier</h4>
          <h4>Hall of Fame</h4>
        </div>
      </div>
      <div id="footer-sec-3">
        <div>
          <h4>Legal and Policies</h4>
          <h4>Meesho Tech Blog</h4>
          <h4>Notices and Returns</h4>
        </div>
      </div>
      <div id="footer-sec-4">
        <div>
          <h4>Reach out to us</h4>
          <div id="socials">
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-brands fa-instagram fa-xl"></i>
            <i class="fa-brands fa-youtube fa-xl"></i>
            <i class="fa-brands fa-linkedin fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
          </div>
        </div>
      </div>
      <div id="footer-sec-5">
        <div>
          <h4>Contact Us</h4>
          <div>
            <p>Fashnear Technologies Private Limited</p>
            <p>CIN: U74900KA2015PTC082263</p>
            <p>
              06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer
              Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka,
              India
            </p>
            <p>E-mail address: query@meesho.com</p>
            <p>© 2015-2022 Meesho.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
