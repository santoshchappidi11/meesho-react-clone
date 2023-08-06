import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div id="add-product-body">
      <div id="add-product">
        <div id="image">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="add-product"
          />
        </div>
        <div id="add-product-main">
          <form>
            <h3>Add Product</h3>
            <div id="fields">
              <input type="text" placeholder="Product Name" />
              <input type="email" placeholder="Product Image" />
              <input type="password" placeholder="Product Price" />
              <select>
                <option>Women Ethnic</option>
                <option>Women Western</option>
                <option>Mens</option>
                <option>Kids</option>
                <option>Home&Kicthen</option>
                <option>Beauty&Health</option>
                <option>Jewellery&Accessories</option>
                <option>Bags&Footwear</option>
                <option>Electronics</option>
              </select>
            </div>
            <div id="button">
              <button>Add Product</button>
            </div>
          </form>
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

export default AddProduct;
