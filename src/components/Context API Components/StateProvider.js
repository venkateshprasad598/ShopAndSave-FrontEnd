import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //The Data Layer

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Use it inside a component
export const useStateValue = () => useContext(StateContext);
