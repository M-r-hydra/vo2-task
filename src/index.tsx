// React
import React from "react";
import ReactDOM from "react-dom/client";
// React

// Components
import App from "./App";
// Components

// Redux
import { Provider } from "react-redux";
import { store } from "./StateManagers/RTK/store";
// Redux

// Router
import { BrowserRouter as Router } from "react-router-dom";
// Router

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
