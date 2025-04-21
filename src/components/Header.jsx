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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-3 sm:py-4'}`}>
      <div className="w-[95%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Anandadhara Logo" className="h-8 sm:h-10 md:h-12" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink to="/" className={({isActive}) => 
            `text-white hover:text-primary transition-colors text-sm lg:text-base ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/schedule" className={({isActive}) => 
            `text-white hover:text-primary transition-colors text-sm lg:text-base ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Schedule
          </NavLink>
          <NavLink to="/gallery" className={({isActive}) => 
            `text-white hover:text-primary transition-colors text-sm lg:text-base ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Gallery
          </NavLink>
          <NavLink to="/all-events" className={({isActive}) => 
            `text-white hover:text-primary transition-colors text-sm lg:text-base ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Events
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `text-white hover:text-primary transition-colors text-sm lg:text-base ${isActive ? 'text-primary font-medium' : ''}`
          }>
            Contact
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button - Enhanced for better visibility */}
        <button 
          className="md:hidden text-white text-xl sm:text-2xl focus:outline-none p-2 bg-primary/30 backdrop-blur-sm rounded-md hover:bg-primary/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
      
      {/* Mobile Navigation - Improved animation */}
      <div className={`md:hidden fixed inset-0 bg-black/95 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Close button at top */}
        <div className="w-[95%] mx-auto flex justify-end pt-3 sm:pt-4">
          <button 
            className="text-white text-xl sm:text-2xl p-2 bg-primary/30 rounded-md hover:bg-primary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-xl sm:text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({isActive}) => 
              `text-xl sm:text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({isActive}) => 
              `text-xl sm:text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/all-events" 
            className={({isActive}) => 
              `text-xl sm:text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-xl sm:text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
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