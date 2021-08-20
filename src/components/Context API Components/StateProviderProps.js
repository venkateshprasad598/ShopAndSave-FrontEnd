export const getBasketPrice = (Price) =>
  Price.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE":
      let newBasket = [...state.basket]; //CLONE THE BASKET
      const Index = state.basket.findIndex((data) => data.id === action.id); //FIND REMOVING ITEM INDEX
      newBasket.splice(Index, 1); // SPLICE THE ITEM
      if (Index >= 0) {
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        console.log("Some error occured");
      }
  }
};
// console.log(reducer());
