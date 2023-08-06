import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";

const EditProduct = () => {
  const singleProduct = useParams();
  const { state, contextProducts } = useContext(AuthContexts);
  const [productsContext, setProductsContext] = useState([]);
  const [editProductData, setEditProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Men",
  });

  const handleChangeValues = (e) => {
    setEditProductData({ ...editProductData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.products?.length) {
      const newProduct = state?.products?.find(
        (prod) => prod.id == singleProduct.id
      );
      setEditProductData(newProduct);
    } else {
      setEditProductData({});
    }
  }, [state, singleProduct]);

  useEffect(() => {
    if (state?.currentUser) {
      setProductsContext(state?.products);
    } else {
      setProductsContext([]);
    }
  }, [state]);

  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    if (
      editProductData.name &&
      editProductData.image &&
      editProductData.price &&
      editProductData.category
    ) {
      for (let i = 0; i < productsContext.length; i++) {
        if (productsContext[i].id == singleProduct.id) {
          productsContext[i].id = editProductData.id;
          productsContext[i].name = editProductData.name;
          productsContext[i].image = editProductData.image;
          productsContext[i].price = editProductData.price;
          productsContext[i].category = editProductData.category;
        }
      }
      contextProducts(productsContext);
      setEditProductData({
        name: "",
        image: "",
        price: "",
        category: "Men",
      });
      toast.success("Product updated successfully!");
    } else {
      toast.error("Please fill all the fields!");
    }
  };

  return (
    <div id="edit-product-body">
      <div id="edit-product">
        <div id="image">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="edit-product"
          />
        </div>
        <div id="edit-product-main">
          <form onSubmit={handleEditProductSubmit}>
            <h3>Edit Product</h3>
            <div id="fields">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={editProductData.name}
                onChange={handleChangeValues}
              />
              <input
                type="text"
                name="image"
                placeholder="Product Image"
                value={editProductData.image}
                onChange={handleChangeValues}
              />
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={editProductData.price}
                onChange={handleChangeValues}
              />
              <select
                name="category"
                value={editProductData.category}
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
              <button type="submit">Update Product</button>
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

export default EditProduct;
