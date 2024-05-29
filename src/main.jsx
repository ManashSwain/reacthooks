import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Appcontext from "./context/Appcontext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Appcontext>
  <App />
  </Appcontext>
    
  
);
