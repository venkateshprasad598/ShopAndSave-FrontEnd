import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Route className="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
