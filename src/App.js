import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0a0a0a",
              color: "#fff",
              border: "2px solid #FFB800",
              borderRadius: 0,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
