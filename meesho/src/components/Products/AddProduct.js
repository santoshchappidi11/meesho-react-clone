import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig/index";
import { useNavigate } from "react-router-dom";
// import { AuthContexts } from "../Context/AuthContext";
// import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  // const { contextProducts } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [addProductData, setAddProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Mens",
  });

  const handleChangeValues = (e) => {
    setAddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();

    if (
      addProductData.name &&
      addProductData.image &&
      addProductData.price &&
      addProductData.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));

        if (token) {
          const response = await api.post("/add-product", {
            addProductData,
            token,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            navigateTo("/");
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
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
                <option>Women-Ethnic</option>
                <option>Women-Western</option>
                <option>Mens</option>
                <option>Kids</option>
                <option>Home&Kitchen</option>
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
              By continuing, you agree to U SHOP
              <b> Terms & Conditions</b> and <b>Privacy Policy</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
