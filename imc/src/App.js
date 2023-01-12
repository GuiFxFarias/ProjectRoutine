import "./components/layout/MobileStyle.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
