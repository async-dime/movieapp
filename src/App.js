import "./App.css";
import React from "react";
import Routes from "./routes/router";
import { Provider } from "react-redux";
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Routes />


    // <Provider store={store}>
    // </Provider>
  );
}

export default App;
