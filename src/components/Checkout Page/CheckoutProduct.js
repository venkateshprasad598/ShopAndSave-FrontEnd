import React from "react";
import { useStateValue } from "../Context API Components/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE", id: id });
  };
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>

        <p className="CheckoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
