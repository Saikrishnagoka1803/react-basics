import React from "react";
import ReactDOM from "react-dom/client";

const reactelement = React.createElement('h2', {id:"child"}, 'hello I am from react emoji 🚀');
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(reactelement);