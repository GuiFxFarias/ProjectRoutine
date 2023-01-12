import "./components/layout/MobileStyle.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./components/layout/Themes";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
