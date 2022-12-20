import { TYPES } from "./actions";

export const initialState = {
  products: [],
  cart: [],
};

export const cartReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    case TYPES.ADD_CART:
      return { ...state, cart: [...state.cart, payload] };
    case TYPES.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item, i) => i != payload),
      };
    case TYPES.REMOVE_REPEATED_CART:
      return { ...state };
    default:
      return;
  }
};
