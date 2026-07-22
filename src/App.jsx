import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Burger from "./components/Burger/Burger";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Arts from "./pages/Arts/Arts";
import ArtDetail from "./pages/ArtDetail/ArtDetail";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Success from "./pages/Success/Success";
import Impressum from "./pages/Impressum/Impressum";
import Datenschutz from "./pages/Datenschutz/Datenschutz";
import NotFound from "./pages/NotFound/NotFound";

// Section-aware accent: /projects/* -> brass, /arts/* -> verdigris,
// anything else keeps the default (projects) accent.
function useSectionAttribute() {
  const { pathname } = useLocation();
  useEffect(() => {
    const section = pathname.startsWith("/arts")
      ? "arts"
      : pathname.startsWith("/about")
        ? "about"
        : "projects";
    document.documentElement.setAttribute("data-section", section);
  }, [pathname]);
}

// Keeps <meta name="theme-color"> in sync with whatever --bg is currently
// active, so Android's status/navigation bar doesn't default to white
// against a dark theme. A MutationObserver is the most robust way to do
// this since data-theme and data-section are set by two different
// components and we don't want to depend on effect ordering between them.
function useThemeColorMeta() {
  useEffect(() => {
    function updateThemeColor() {
      const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
      if (!bg) return;
      let meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "theme-color");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", bg);
    }

    updateThemeColor();
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "data-section"],
    });
    return () => observer.disconnect();
  }, []);
}

// Blocks the right-click context menu specifically on images, so
// "Save image as..." isn't a one-click action. (Doesn't stop DevTools/
// screenshots — nothing client-side truly can — just deters casual copying.)
function useImageContextMenuGuard() {
  useEffect(() => {
    function handleContextMenu(e) {
      if (e.target.tagName === "IMG") e.preventDefault();
    }
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useSectionAttribute();
  useThemeColorMeta();
  useImageContextMenuGuard();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu automatically on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <ScrollToTop />
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      <Burger open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main style={{ background: "var(--bg-center)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/arts/:slug" element={<ArtDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/success" element={<Success />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

