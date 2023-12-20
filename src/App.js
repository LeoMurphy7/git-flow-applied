import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar/sidebar";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import Profile from "./pages/profile/profile";
import { AuthProvider } from "./utils/auth";
import PrivateRoute from "./utils/requireAuth";
import NavBar from "./components/navbar";
import { LoginRoute } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxTest from "./components/reduxtest";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavBar/>
      <Routes>
        <Route path={LoginRoute} element={<Login />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/homepage" element={<HomePage name={"Mustang"} />}></Route>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
          <Route path="/redux" element={<ReduxTest/>}></Route>
      </Routes>
      </PersistGate>
    </Provider>
    </AuthProvider>
        
  );
}

export default App;

