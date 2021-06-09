import React from "react";
import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainRow from "../components/MainRow";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { ItemCategoryContainer } from "../components/ItemCategoryContainer";
import Loading from "../components/Loading";
import ItemCartContainer from "../components/ItemCartContainer.jsx";
import { BuyForm } from "../components/BuyForm";
import Footer from "../components/Footer";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <MainRow />
        </header>
        <Switch>
          <Route path="/sign-in">
            <h3 className="font-weight-bold">We are working on it</h3>
            <Loading />
          </Route>
          <Route path="/register">
            <h3 className="font-weight-bold">We are working on it</h3>
            <Loading />
          </Route>
          <Route path="/shopping-cart">
            <ItemCartContainer />
          </Route>
          <Route path="/item/:productId">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemCategoryContainer />
          </Route>
          <Route path="/buyform">
            <BuyForm></BuyForm>
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouterApp;
