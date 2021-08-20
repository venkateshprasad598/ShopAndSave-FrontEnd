import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context API Components/StateProvider";
import { formatMs } from "@material-ui/core";
import { getBasketPrice } from "../Context API Components/StateProviderProps";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  // var sum = 0;
  // for (let i = 0; i < basket.length; i++) {
  //   sum += basket[i].price;
  // }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__title">
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Buy</button>
    </div>
  );
};

export default Subtotal;
