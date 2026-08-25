import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./src/components/Contact.jsx";
import About from "./src/components/About.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(<RouterProvider router={router} />);
