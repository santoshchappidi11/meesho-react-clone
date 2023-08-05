import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div id="cart-body">
      <div id="left">
        <div id="item-number">
          <h3>Cart</h3>
          <span>3 Items</span>
        </div>
        <div id="cart-products">
          <div class="main-item">
            <div class="item-details">
              <div class="img">
                <img
                  src="https://images.meesho.com/images/products/271481337/8hitv_512.jpg"
                  alt="product"
                />
              </div>
              <div class="details">
                <h4>Mens cotton t-shirt half sleeves spread collar</h4>
                <div class="size">
                  <span>Size: M</span>
                  <span>Qty: 1</span>
                </div>
                <span>₹330</span>
                <div id="remove">
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
          <div class="main-item">
            <div class="item-details">
              <div class="img">
                <img
                  src="https://images.meesho.com/images/products/292872087/1o2yf_400.webp"
                  alt="product"
                />
              </div>
              <div class="details">
                <h4>Fancy Retro Men Tshirts</h4>
                <div class="size">
                  <span>Size: M</span>
                  <span>Qty: 1</span>
                </div>
                <span>₹299</span>
                <div id="remove">
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
          <div class="main-item">
            <div class="item-details">
              <div class="img">
                <img
                  src="https://images.meesho.com/images/products/152064623/b3c6y_400.webp"
                  alt="product"
                />
              </div>
              <div class="details">
                <h4>Trendy Men Shirts</h4>
                <div class="size">
                  <span>Size: M</span>
                  <span>Qty: 1</span>
                </div>
                <span>₹274</span>
                <div id="remove">
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
        </div>
      </div>
      <div id="right">
        <div id="price-details">
          <h3>Price Details</h3>
          <div>
            <h4>Total Product Price</h4>
            <span>₹330</span>
          </div>
        </div>
        <div id="total-price">
          <h3>Order Total</h3>
          <span>₹330</span>
        </div>
        <h5>Clicking on ‘Continue’ will not deduct any money</h5>
        <div id="button">
          <button>Continue</button>
        </div>
        <div id="right-img">
          <img
            src="https://images.meesho.com/images/marketing/1588578650850.png"
            alt="safety"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
