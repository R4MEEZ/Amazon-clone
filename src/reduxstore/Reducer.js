const initialState = {
  cartQuantity: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cartQuantity.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // Product exists, increment its quantity
        const updatedCart = state.cartQuantity.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
        return {
          ...state,
          cartQuantity: updatedCart,
        };
      } else {

        return {
          ...state,
          cartQuantity: [
            ...state.cartQuantity,
            { ...action.payload, quantity: action.payload.quantity },
          ],
        };
      }

    case "REMOVE_ALL":
      return { ...state, cartQuantity: [] };

    case "REMOVE_SINGLE_PRODUCT":
      const removedProduct = state.cartQuantity.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, cartQuantity: removedProduct };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartQuantity: action.payload, // Update cartQuantity with the updated array
      };

    default:
      return state;
  }
};

export default myReducer;
