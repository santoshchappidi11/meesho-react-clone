import React from "react";
import "./Home.css";
import sec1 from "./../../images/sec-1.JPG";
import sec1sub from "./../../images/sec-1-sub.JPG";
import sec2 from "./../../images/sec-2.JPG";
import sec3 from "./../../images/sec-3.JPG";
import sec4 from "./../../images/sec-4.JPG";
import sec5 from "./../../images/sec-5.JPG";
import sec6 from "./../../images/sec-6.JPG";

const Home = () => {
  return (
    <>
      <div id="body">
        <div id="section-1" class="section">
          <img src={sec1} alt="section" />
        </div>
        <div id="sub-sec-1" class="section">
          <img src={sec1sub} alt="section" />
        </div>
        <div id="section-2" class="section">
          <img src={sec2} alt="section" />
        </div>
        <div id="section-3" class="section">
          <img src={sec3} alt="section" />
        </div>
        <div id="section-4" class="section">
          <img src={sec4} alt="section" />
        </div>
        <div id="section-5" class="section">
          <img src={sec5} alt="section" />
        </div>
        <div id="section-6" class="section">
          <img src={sec6} alt="section" />
        </div>
      </div>

      <div id="products">
        <div id="header-product">
          <h2>Products For You</h2>
        </div>
        <div id="filter-products">
          <div id="left">
            <div id="sort">
              <span>
                Sort by : <b>Relevance</b>
              </span>
              <i class="fa-solid fa-angle-down"></i>
            </div>

            <div id="filter-main">
              <div id="filters">
                <h4>FILTERS</h4>
                <p>1000+ Products</p>
              </div>
              <div class="filter">
                <h3>Category</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Gender</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Fabric</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Oxfords</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>dail-shape</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Color</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Price</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Meesho Mall</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Occassion</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>combo of</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Kurta_fabric</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Dupatta Color</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Discount</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Rating</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Size</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>combo</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>operating_voltage</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>power-consumption</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Reversible</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>used_for</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>body_material</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Material</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="filter">
                <h3>Bottom_Length</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>

          <div id="right">
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/154286158/agoag_400.webp"
                  alt="product"
                />
              </div>
              <h5>Aadab Graceful ...</h5>
              <h2>
                ₹144 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>3.8</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>961 Reviews</h6>
              </div>
            </div>
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/151630067/fwfda_400.webp"
                  alt="product"
                />
              </div>
              <h5>Attractive Animal ...</h5>
              <h2>
                ₹461 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>3.9</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>382 Reviews</h6>
              </div>
            </div>
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/139159431/kw3w1_400.webp"
                  alt="product"
                />
              </div>
              <h5>Women Flipflops</h5>
              <h2>
                ₹174 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>3.9</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>262 Reviews</h6>
              </div>
            </div>
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/78594107/b1ynl_400.webp"
                  alt="product"
                />
              </div>
              <h5>Arts & Crafts Paint ...</h5>
              <h2>
                ₹162 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>4.1</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>2124 Reviews</h6>
              </div>
            </div>
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/40186090/mloop_400.webp"
                  alt="product"
                />
              </div>
              <h5>Trendy Women Belts</h5>
              <h2>
                ₹138 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>3.7</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>2863 Reviews</h6>
              </div>
            </div>
            <div class="product">
              <div class="image">
                <img
                  src="https://images.meesho.com/images/products/40186090/mloop_400.webp"
                  alt="product"
                />
              </div>
              <h5>Trendy Women Belts</h5>
              <h2>
                ₹138 <span>onwards</span>
              </h2>
              <p>Free Delivery</p>
              <div class="ratings">
                <div class="rating">
                  <h4>3.7</h4>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>2863 Reviews</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
