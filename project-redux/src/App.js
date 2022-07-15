import React from "react";
import { Provider } from "react-redux";
import Router from "./components/Router";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
