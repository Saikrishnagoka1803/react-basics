import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer.jsx";

const App = () => {
  return (
    <div className="mission-heading">
      <p>This is a food delivery app </p>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
