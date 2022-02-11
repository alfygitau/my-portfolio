import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from './components/ContactMe/Contact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/contactme" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
