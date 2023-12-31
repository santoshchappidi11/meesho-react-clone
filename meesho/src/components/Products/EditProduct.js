import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../ApiConfig/index";
// import { AuthContexts } from "../Context/AuthContext";

const EditProduct = () => {
  const { editProdId } = useParams();
  const navigateTo = useNavigate();
  // const { state, contextProducts } = useContext(AuthContexts);
  // const [productsContext, setProductsContext] = useState([]);
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
    const getEditProductData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));
        const response = await api.post("/get-editproduct-data", {
          token,
          productId: editProdId,
        });

        if (response?.data?.success) {
          setEditProductData(response?.data?.product);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if (editProdId) {
      getEditProductData();
    }
  }, [editProdId]);

  const handleEditProductSubmit = async (e) => {
    e.preventDefault();

    if (
      editProductData.name &&
      editProductData.image &&
      editProductData.price &&
      editProductData.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("MeeshoUserToken"));
        const response = await api.patch("/update-your-product", {
          editProductData,
          token,
          productId: editProdId,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          navigateTo(`/${response?.data?.product?.category}`);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
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
