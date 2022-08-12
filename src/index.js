import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvdier } from "./context/auth-context";

ReactDOM.render(
  <AuthContextProvdier>
    <App />
  </AuthContextProvdier>,
  document.getElementById("root")
);
