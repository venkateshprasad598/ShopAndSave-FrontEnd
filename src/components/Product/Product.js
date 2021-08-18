import React from "react";
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating) //Display amount of ⭐ according to react
            .fill() //Fill it with emptpy values
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
};
export default Product;
