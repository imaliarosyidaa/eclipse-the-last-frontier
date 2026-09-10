import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Gameplay from "./pages/Gameplay";
import World from "./pages/World";
import News from "./pages/News";
import Play from "./pages/Play";

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/world" element={<World />} />
          <Route path="/news" element={<News />} />
          <Route path="/play" element={<Play />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          minHeight: "100vh",
        }}
      >
        <AppContent />
      </div>
    </BrowserRouter>
  );
}
