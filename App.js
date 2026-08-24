import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import RestaurantContainer from "./components/RestaurantContainer.jsx";

const App = () => {
  return (
    <div className="mission-heading">
      <p>This is a food delivery app </p>
      <Header />
      <RestaurantContainer />
    </div>
  );
};

export default App;
