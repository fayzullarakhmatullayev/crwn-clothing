import React from "react";

import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
