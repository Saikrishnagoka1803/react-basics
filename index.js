import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact.jsx";
import About from "./src/components/About.jsx";
import Error from "./src/components/Error.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
