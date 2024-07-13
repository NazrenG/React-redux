const initialState = {
  cart: [],
  productCount: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_item":
      if (state.cart.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          productCount: state.productCount + action.payload.quantity,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          productCount: state.productCount + action.payload.quantity,
        };
      }
    case "remove_item":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        productCount: state.productCount - 1,
      };
    case "update_item":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: --action.payload.quantity }
            : item
        ),
        productCount: state.productCount - 1,
      };
    default:
      return state;
  }
};
export default rootReducer;
