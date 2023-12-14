import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar/sidebar";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home"

function App() {
  return (
     <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
      <Route path="/homepage" element={<HomePage/>}></Route>
     </Routes>  

  );
}

export default App;
 