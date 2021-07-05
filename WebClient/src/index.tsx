import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

// Measure performance
reportWebVitals(console.log);
