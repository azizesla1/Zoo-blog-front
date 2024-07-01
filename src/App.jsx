// eslint-disable 
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Hero from "./pages/Hero";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Addb from "./pages/Addb";
import Login from "./pages/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/addb" element={<Addb />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
