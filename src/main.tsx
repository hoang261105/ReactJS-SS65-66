import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import combineReducer from "./store/store.ts";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={combineReducer}>
    <App />
  </Provider>
);
