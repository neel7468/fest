import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import logoImg from './assets/alogo.png';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Pages
import AllEvents from './pages/AllEvents';
import EventDetail from './pages/EventDetail';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Initial page load
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Shorter loading time for page transitions
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Header logo={logoImg} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero logo={logoImg} />
            <Events />
            <Schedule />
            <Gallery />
            <Contact />
          </>
        } />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
