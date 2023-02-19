import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Page404 from "../pages/P404.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
