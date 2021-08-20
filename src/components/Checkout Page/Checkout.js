import React from "react";
import { useStateValue } from "../Context API Components/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__heading">
          {basket.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your baskets. To buy one or more items,
                click "Add to basket" below the item.
              </p>
            </div>
          ) : (
            <div>
              {console.log(basket)}
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket.map((data) => {
                return (
                  <CheckoutProduct
                    id={data.id}
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    rating={data.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="checkout__right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
};

export default Checkout;
