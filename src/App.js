import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </Router>
  );
};

export default App;
