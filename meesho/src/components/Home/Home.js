import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import sec1 from "./../../images/sec-1.JPG";
import sec1sub from "./../../images/sec-1-sub.JPG";
import sec2 from "./../../images/sec-2.JPG";
import sec3 from "./../../images/sec-3.JPG";
import sec4 from "./../../images/sec-4.JPG";
import sec5 from "./../../images/sec-5.JPG";
import sec6 from "./../../images/sec-6.JPG";
// import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig/index";

const Home = () => {
  // const { state } = useContext(AuthContexts);
  const [allProducts, setAllProducts] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await api.get("/all-products");

        if (response.data.success) {
          setAllProducts(response.data.products);
        } else {
          setAllProducts([]);
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getAllProducts();
  }, []);

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
            <div id="all-products">
              {allProducts?.length ? (
                allProducts.map((prod) => (
                  <div
                    class="product"
                    key={prod._id}
                    onClick={() => navigateTo(`/single-product/${prod._id}`)}
                  >
                    <div class="image">
                      <img src={prod.image} alt="product" />
                    </div>
                    <h5>{prod.name}</h5>
                    <h2>
                      ₹{prod.price} <span>onwards</span>
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
                ))
              ) : (
                <h3>No Products!</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
