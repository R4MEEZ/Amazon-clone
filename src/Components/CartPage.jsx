import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProducts, removeSingleProduct, updateCartQuantity } from "../reduxstore/Action";
import "./CartPage.css";
import trash from "../Assets/trash.svg";
import plus from "../Assets/plus.svg";
import minus from "../Assets/minus.svg";

const CartPage = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartQty = useSelector((state) => state.cartQuantity);

  // Function to calculate total price
  useEffect(() => {
    const totalPrice = cartQty.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartQty]);

  // Function to add quantity of a product
  const addQuantity = (product) => {
    const updatedCart = cartQty.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCartQuantity(updatedCart));
  };
  
  const subQuantity = (product) => {
    const updatedCart = cartQty.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch(updateCartQuantity(updatedCart));
  };

  // Function to remove all products from the cart
  const removeAll = () => {
    dispatch(removeProducts([]));
    localStorage.removeItem("cart"); // Remove cart from local storage
  };

  // Function to remove a single product from the cart
  const removeSingle = (id) => {
    dispatch(removeSingleProduct(id));
    // Update local storage after removing the product
    localStorage.setItem("cart", JSON.stringify(cartQty));
  };

  // Save cart to local storage when cartQty changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartQty));
  }, [cartQty]);

  return (
    <>
      <div className="card-header">
        <h2 align="center" className="cart-title fs-1 ">
          Your Cart
        </h2>
      </div>
      <div className="cartHeader d-flex justify-content-between container mt-5">
        <div className="btn btn-danger px-3 py-2 " onClick={() => removeAll()}>
          Remove All
        </div>
        <div className="totalPrice">{totalPrice}</div>
      </div>
      <div className="cards d-flex flex-wrap gap-4 justify-content-center">
        {cartQty.map((product, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <div className="card-img">
              <img src={product.thumbnail} alt="Product" />
            </div>
            <div className="card-info">
              <h5 className="text-title">{product.title}</h5>
              <p className="text-body">{product.description}</p>
              <div className="card-footer">
                <div className="item-qty">
                  <img src={plus} alt="" onClick={() => addQuantity(product)} />
                  <span className="item-qty-text">{product.quantity}</span>
                  <img src={minus} onClick={() => subQuantity(product)} alt="" />
                </div>
                <div className="card-button" onClick={() => removeSingle(product.id)}>
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
