import './style.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Shopt from './components/Shopt';
import Shopg from './components/Shopg';
import Service from './components/Service';
import Marque from './components/Marque';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopt" element={<Shopt />} />
        <Route path="/shopg" element={<Shopg />} />
        <Route path="/service" element={<Service />} />
        <Route path="/marque" element={<Marque />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;