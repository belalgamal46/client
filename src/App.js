import React from "react";
import GlobalStyles from "./globalStyles";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Clothes from "./pages/Clothes";
import Product from "./components/product";
class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/all" exact>
            <Home />
          </Route>

          <Route path="/tech" exact>
            <Tech />
          </Route>

          <Route path="/clothes" exact>
            <Clothes />
          </Route>

          <Route path="/product/:id" exact>
            <Product />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
