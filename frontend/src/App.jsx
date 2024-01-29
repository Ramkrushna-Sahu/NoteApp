import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Notes from "./components/Notes";
import NoteBuild from "./components/NoteBuild";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Features from "./components/Features";
import './index.css'
import Footer from "./components/Footer";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
    <NoteState>
      {/* <Features/> */}
      <Router>
      <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>          
          <Route path="/signup" element={<SignUp/>}/>          
          <Route path="/login" element={<Login/>}/>       
          <Route path="/notes" element={<NoteBuild/>}/> 
        </Routes>
        <Footer/>
      </Router>

      </NoteState>
    </>
  )
}