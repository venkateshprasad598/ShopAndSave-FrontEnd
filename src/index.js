import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
// import { StateContext } from "./components/StateProvider/StateProvider";
import { StateProvider } from "./components/Context API Components/StateProvider";
import { initialState } from "./components/Context API Components/StateProviderProps";
import { reducer } from "./components/Context API Components/StateProviderProps";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
