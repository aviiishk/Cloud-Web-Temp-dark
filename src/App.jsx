import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import data from "./data/data.json";


const App = () => {

    useEffect(() => {
    document.title = data.index.title;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* SCROLL RESET ON ROUTE CHANGE */}
      <ScrollToTop />

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
