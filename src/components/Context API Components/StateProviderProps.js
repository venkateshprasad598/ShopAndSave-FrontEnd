export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
  }

  const newBasket = [...state.basket];
  const Index = state.basket.findIndex((data) => data.id === action.id);
  newBasket.splice(Index, 1);
  return {
    ...state,
    basket: newBasket,
  };
};
// console.log(reducer());
