import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "@/pages/About";
// import Layout from "@/layouts/Layout";
import Header from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      {/* <Layout> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      {/* </Layout>/ */}
    </Router>
  );
}

export default App;
