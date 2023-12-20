import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar/sidebar";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import ReduxTest from "./components/reduxtest";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ReduxTest />
      </PersistGate>
    </Provider>
  );
}

export default App;
