import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Anandadhara Logo" className="h-12" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({isActive}) => 
            `text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/schedule" className={({isActive}) => 
            `text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Schedule
          </NavLink>
          <NavLink to="/gallery" className={({isActive}) => 
            `text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Gallery
          </NavLink>
          <NavLink to="/all-events" className={({isActive}) => 
            `text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Events
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Contact
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-black/95 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({isActive}) => 
              `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({isActive}) => 
              `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/all-events" 
            className={({isActive}) => 
              `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;