import React from 'react';
import "./LatestItems.css"

const products = [
  { id: 7, title: "Accessories Pack", price: "£9.00", image: "assets/product-7.jpg" },
  { id: 8, title: "Men’s Casual Pack", price: "£12.00", image: "assets/product-8.jpg" },
  { id: 9, title: "Men’s Garb", price: "£6.00", image: "assets/product-9.jpg" },
  { id: 10, title: "Cold Garb", price: "£14.00", image: "assets/product-10.jpg" },
  { id: 11, title: "Accessories Pack", price: "£9.00", image: "assets/product-11.jpg" },
  { id: 12, title: "Men’s Casual Pack", price: "£12.00", image: "assets/product-12.jpg" },
  { id: 13, title: "Men’s Garb", price: "£6.00", image: "assets/product-13.jpg" },
  { id: 14, title: "Cold Garb", price: "£14.00", image: "assets/product-14.jpg" },
];

const ShopItem = ({ product }) => (
  <div className="col-sm-6 col-md-3 col-lg-3">
    <div className="shop-item">
      <div className="shop-item-image">
        <img src={product.image} alt={product.title} />
        <div className="shop-item-detail">
          <a className="btn btn-round btn-b">
            <span className="icon-basket">Add To Cart</span>
          </a>
        </div>
      </div>
      <h4 className="shop-item-title font-alt">
        <a href="#">{product.title}</a>
      </h4>
      {product.price}
    </div>
  </div>
);

const LatestItems = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <h2 className="module-title font-alt">Latest in clothing</h2>
      </div>
    </div>
    <div className="row multi-columns-row">
      {products.map(product => (
        <ShopItem key={product.id} product={product} />
      ))}
    </div>
    <div className="row mt-30">
      <div className="col-sm-12 align-center">
        <a className="btn btn-b btn-round" href="#">See all products</a>
      </div>
    </div>
  </div>
);

export default LatestItems;
