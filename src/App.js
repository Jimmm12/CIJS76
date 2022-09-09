import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import About from "./page/about";
import SamplePost from "./page/Samplepost";
import Contact from "./page/Contact";
import Navigation from "./page/Nav";
import Footer from "./page/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<SamplePost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;