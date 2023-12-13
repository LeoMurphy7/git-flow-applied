import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import HomePage from "./pages/Home/home";
import Sidebar from "./pages/Sidebar/sidebar";

function App() {
  return (
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
     </Routes>
  );
}

export default App;
