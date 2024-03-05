import React, { useContext, useEffect, useState } from "react";
import "./Kids.css";
// import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../ApiConfig/index";
import { toast } from "react-hot-toast";

const Kids = () => {
  // const { state } = useContext(AuthContexts);
  const [allProducts, setAllProducts] = useState([]);
  const [kidsProductData, setKidsProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigateTo = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await api.get("/all-products");
        if (response.data.success) {
          setIsLoading(false);
          setAllProducts(response.data.products);
        } else {
          setAllProducts([]);
          toast.error(response.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts?.length) {
      const newProducts = allProducts?.filter(
        (prod) => prod?.category == "Kids"
      );
      setKidsProductData(newProducts);
    }
  }, [allProducts]);

  return (
    <>
      <div id="products">
        {isLoading ? (
          <>
            <div id="kids-loading">
              <h3>Loading...</h3>
            </div>
          </>
        ) : (
          <>
            <div id="header-product">
              <h2>Kids Dresses</h2>
              <h4>
                Showing 21-40
                <span> out of 10000 products</span>
              </h4>
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
                  {kidsProductData?.length ? (
                    kidsProductData.map((prod) => (
                      <div
                        class="product"
                        key={prod?._id}
                        onClick={() =>
                          navigateTo(`/single-product/${prod?._id}`)
                        }
                      >
                        <div class="image">
                          <img src={prod?.image} alt="product" />
                        </div>
                        <h5>{prod?.name}</h5>
                        <h2>
                          ₹{prod?.price?.toLocaleString("en-IN")}{" "}
                          <span>onwards</span>
                        </h2>
                        <p>Free Delivery</p>
                        <div class="ratings">
                          <div class="rating">
                            <h4>{prod?.avgRating ? prod?.avgRating : "3.8"}</h4>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <h6>961 Reviews</h6>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div id="no-prod-msg">
                      <h3>No Products!</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Kids;
