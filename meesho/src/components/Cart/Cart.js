import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { AuthContexts } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig/index";
// import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state } = useContext(AuthContexts);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  // const navigateTo = useNavigate();

  useEffect(() => {
    if (state?.currentUser?.email) {
      setIsUserLoggedIn(true);
      setCurrentUser(state?.currentUser);
    } else {
      setIsUserLoggedIn(false);
      setCurrentUser({});
    }
  }, [state]);

  useEffect(() => {
    const getAllCartProducts = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));
        const response = await api.post("/get-cart-products", { token });

        if (response.data.success) {
          setCartProducts(response.data.products);
        } else {
          setCartProducts([]);
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getAllCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts?.length) {
      let totalPrice = 0;
      for (let i = 0; i < cartProducts.length; i++) {
        totalPrice = totalPrice + parseInt(cartProducts[i].price);
      }
      setCartTotalPrice(totalPrice);
    } else {
      setCartTotalPrice(0);
    }
  }, [cartProducts]);

  const removeCartProduct = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));
      const response = await api.post("/remove-cart-product", {
        token,
        productId,
      });

      if (response.data.success) {
        setCartProducts(response.data.products);
        toast.success(response.data.message);
      } else {
        toast.success(response.data.message);
        setCartProducts([]);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const removeAllCartProducts = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));
      const response = await api.post("/remove-all-cart-products", { token });

      if (response.data.success) {
        setCartProducts([]);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {isUserLoggedIn && (
        <div id="cart-body">
          <div id="left">
            {!cartProducts.length == 0 && (
              <div id="item-number">
                <h3>Cart</h3>
                <span>{cartProducts?.length} Items</span>
              </div>
            )}
            <div id="cart-products">
              {cartProducts?.length ? (
                cartProducts.map((prod) => (
                  <div class="main-item" key={prod._id}>
                    <div class="item-details">
                      <div class="img">
                        <img src={prod.image} alt="product" />
                      </div>
                      <div class="details">
                        <h4>{prod.name}</h4>
                        <div class="size">
                          <span>Size: M</span>
                          <span>Qty: 1</span>
                        </div>
                        <span>₹{prod.price}</span>
                        <div
                          id="remove"
                          onClick={() => removeCartProduct(prod._id)}
                        >
                          <i class="fa-solid fa-xmark fa-sm"></i>
                          <h4>REMOVE</h4>
                        </div>
                      </div>
                      <div class="edit">
                        <button>EDIT</button>
                      </div>
                    </div>
                    <div class="sold">
                      <h3>Sold By : Maruti Collection</h3>
                      <h3>Free Delivery</h3>
                    </div>
                  </div>
                ))
              ) : (
                <div id="no-prod-msg">
                  <h2>No products in the cart!</h2>
                </div>
              )}
            </div>
          </div>
          <div id="right">
            <div id="price-details">
              <h3>Price Details</h3>
              <div>
                <h4>Total Product Price</h4>
                <span>₹{cartTotalPrice && cartTotalPrice}</span>
              </div>
            </div>
            <div id="total-price">
              <h3>Order Total</h3>
              <h3>₹{cartTotalPrice && cartTotalPrice}</h3>
            </div>
            <h5>Clicking on ‘Continue’ will not deduct any money</h5>
            <div id="button">
              <button onClick={removeAllCartProducts}>Continue</button>
            </div>
            <div id="right-img">
              <img
                src="https://images.meesho.com/images/marketing/1588578650850.png"
                alt="safety"
              />
            </div>
          </div>
        </div>
      )}
      {!isUserLoggedIn && (
        <div id="login-cart-msg">
          <h2>Please login to access the cart page : )</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
