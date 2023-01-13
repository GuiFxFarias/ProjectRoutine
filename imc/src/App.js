import "./components/layout/MobileStyle.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import AddRoutine from "./components/pages/AddRoutine";

function App() {
  return (
    <Router>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AddRoutine" element={<AddRoutine />}></Route>
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
