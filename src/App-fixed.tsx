import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Initiatives } from "./components/pages/Initiatives";
import { Achievements } from "./components/pages/Achievements";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { Services } from "./components/pages/Services"; // Assuming you have this page

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine current page from URL for Navigation component
  const currentPage =
    location.pathname === "/"
      ? "Home"
      : location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
