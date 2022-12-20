import axios from "axios";
import { createContext, useReducer } from "react";
import { TYPES } from "../reducers/actions";
import { cartReducer, initialState } from "../reducers/cartReducer";

const CartContext = createContext();
let added_products = [];

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const setProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: TYPES.SET_PRODUCTS, payload: res.data });
  };
  const addCart = (product) => {
    if (added_products.indexOf(product.id) == -1) {
      added_products.push(product.id);
      product.quantity = 1;
      dispatch({ type: TYPES.ADD_CART, payload: product });
    } else {
      state.cart.map((item) => {
        if (item.id == product.id) {
          item.quantity++;
        }
      });
    }
  };
  const removeCart = (position, product) => {
    if (product.quantity > 1) {
      product.quantity--;
      dispatch({ type: TYPES.REMOVE_REPEATED_CART });
    } else {
      added_products = added_products.filter((item) => item != product.id);
      dispatch({ type: TYPES.REMOVE_CART, payload: position });
    }
  };

  const data = {
    products: state.products,
    cart: state.cart,
    setProducts,
    addCart,
    removeCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };

export default CartContext;
