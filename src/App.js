import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  Error,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
// import styled from "styled-components";

// const Button = styled.button`
//   background: green;
//   color: white;
// `;

// const Container = styled.div`
//   background: red;
//   color: white;
//   font-size: 2rem;
// `;
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route
            exact
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route exact path="*" element={<Error />} />
        </Routes>

        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
