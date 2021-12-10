import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";
import Navigation from "./components/navigation";
import Cart from "./components/cart";
import ProductDisplay from "./components/productDisplay";
import Loader from './components/helper/loader'

//CSS
import "./assets/layout/main.css";

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navigation />
          <Loader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default Main;
