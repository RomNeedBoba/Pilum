import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/global.css";
import Home from "./components/Home";
import HomeTwo from "./components/HomeTwo";

function App() {
  return (
    <Router>
      <Header scrollToSection={() => {}} activeSection="" />
      <Home />
      <HomeTwo />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;