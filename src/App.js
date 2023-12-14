import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar/sidebar";
import Login from "./pages/login/login";

function App() {
  return (
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
     </Routes>
     
  );
}

export default App;
 