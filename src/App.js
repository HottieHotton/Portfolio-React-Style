import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  </Router>
  );
}

export default App;
