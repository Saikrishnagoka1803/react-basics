import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./App.css";
import Contact from "./src/components/Contact.jsx";
import About from "./src/components/About.jsx";
import Error from "./src/components/Error.jsx";
import RestaurantContainer from "./src/components/RestaurantContainer.jsx";
import RestoMenu from "./src/components/RestoMenu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/listRestaurantMenu/:RestoId",
        element: <RestoMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
