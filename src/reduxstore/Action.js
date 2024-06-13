export const addFunc = (product, quantity) => ({
    type: "ADD_TO_CART",
    payload: {
      ...product,
      quantity: quantity
    }
  });
  

export const removeProducts = (products) =>({
    type: "REMOVE_ALL",
    payload: products
})

export const removeSingleProduct = (singleProduct) =>({
    type: "REMOVE_SINGLE_PRODUCT",
    payload: singleProduct
})

export const updateCartQuantity = (updatedCart) => ({
    type: "UPDATE_CART_QUANTITY",
    payload: updatedCart,
  });

