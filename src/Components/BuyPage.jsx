import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SETTINGS } from "../config";
import "./BuyPage.css";
import { useDispatch } from "react-redux";
import { addFunc } from "../reduxstore/Action";

function BuyPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${SETTINGS.apiUrl}/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        setError("Error fetching product data");
        console.error(err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product || Object.keys(product).length === 0) {
    return <div>Loading...</div>;
  }

  const handleAdd = (event, product) => {
    event.stopPropagation();
    const quantity = 1;
    dispatch(addFunc(product, quantity));
    console.log("Product dispatched:", product.title);
  };

  return (
    <div className="buy-page">
      <div className="product-details">
        <div className="title">
          <h1>{product.title}</h1>
        </div>
        <img src={product.thumbnail} alt={product.title} />
        <p className="description">{product.description}</p>
        <div className="product-info">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Availability:</strong> {product.availabilityStatus}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
          <p>
            <strong>Discount:</strong> {product.discountPercentage}%
          </p>
          <p>
            <strong>Minimum Order Quantity:</strong>{" "}
            {product.minimumOrderQuantity}
          </p>
          <p>
            <strong>Shipping Information:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
            {product.dimensions.height} x {product.dimensions.depth} cm
          </p>
          <p>
            <strong>Weight:</strong> {product.weight} kg
          </p>
        </div>
        <div className="add-cart">
          <button onClick={(event) => handleAdd(event, product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
