import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar/sidebar";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import Profile from "./pages/profile/profile";
import { AuthProvider } from "./utils/auth";
import PrivateRoute from "./utils/requireAuth";
import NavBar from "./components/navbar";
import { LoginRoute } from "./routes/routeconstant";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path={LoginRoute} element={<Login />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/homepage" element={<HomePage name={"Mustang"} />}></Route>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
