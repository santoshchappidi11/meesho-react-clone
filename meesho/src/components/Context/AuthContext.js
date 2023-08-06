import { createContext, useEffect, useReducer } from "react";

export const AuthContexts = createContext();

const initialState = {
  currentUser: null,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null };
    case "PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Login = (userDetails) => {
    localStorage.setItem("current-user", JSON.stringify(userDetails));
    dispatch({
      type: "LOGIN",
      payload: userDetails,
    });
  };

  const Logout = () => {
    localStorage.removeItem("current-user");
    dispatch({
      type: "LOGOUT",
    });
  };

  const contextProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));

    dispatch({
      type: "PRODUCTS",
      payload: products,
    });
  };

  useEffect(() => {
    const currentuserDetails = JSON.parse(localStorage.getItem("current-user"));
    dispatch({
      type: "LOGIN",
      payload: currentuserDetails,
    });

    const productsLS = JSON.parse(localStorage.getItem("products"));
    dispatch({
      type: "PRODUCTS",
      payload: productsLS,
    });
  }, []);

  return (
    <AuthContexts.Provider value={{ state, Login, Logout, contextProducts }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
