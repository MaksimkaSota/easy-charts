import React from "react";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
