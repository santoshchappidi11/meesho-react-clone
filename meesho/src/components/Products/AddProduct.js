import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { AuthContexts } from "../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const { contextProducts } = useContext(AuthContexts);
  const [addProductData, setAddProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Mens",
  });

  const handleChangeValues = (e) => {
    setAddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleSubmitAddProduct = (e) => {
    e.preventDefault();

    if (
      addProductData.name &&
      addProductData.image &&
      addProductData.price &&
      addProductData.category
    ) {
      const allProducts = JSON.parse(localStorage.getItem("products")) || [];
      let randomId = uuidv4();
      addProductData["id"] = randomId;
      allProducts.push(addProductData);
      contextProducts(allProducts);
      toast.success("Product added successfully!");
    } else {
      toast.error("Please fill all the fields!");
    }
  };

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
          <form onSubmit={handleSubmitAddProduct}>
            <h3>Add Product</h3>
            <div id="fields">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={addProductData.name}
                onChange={handleChangeValues}
              />
              <input
                type="text"
                name="image"
                placeholder="Product Image"
                value={addProductData.image}
                onChange={handleChangeValues}
              />
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={addProductData.price}
                onChange={handleChangeValues}
              />
              <select
                name="category"
                value={addProductData.category}
                onChange={handleChangeValues}
              >
                <option>Women Ethnic</option>
                <option>Women Western</option>
                <option>Mens</option>
                <option>Kids</option>
                <option>Home&Kitchen</option>
                <option>Beauty</option>
                <option>Health</option>
                <option>Jewellery</option>
                <option>Accessories</option>
                <option>Bags</option>
                <option>Footwear</option>
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
