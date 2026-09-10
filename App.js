import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="p-4">
      <p>This is a food delivery app </p>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
