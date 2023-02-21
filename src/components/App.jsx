import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Location from "../pages/Location";
import Page404 from "../pages/P404.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/location/:id" element={<Location />} />
        <Route exact path="/not-found" element={<Page404 />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
