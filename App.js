import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import RestaurantContainer from "./src/components/RestaurantContainer.jsx";

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
