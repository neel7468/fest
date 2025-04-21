import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/i.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ logo }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Add state for spotlight position
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Set the event date (March 15, 2025)
    const eventDate = new Date('May 17, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
    
    // More dynamic event-like spotlight animation
    const spotlightInterval = setInterval(() => {
      setSpotlightPos({
        x: 20 + Math.random() * 60, // Wider range for more dramatic movement
        y: 20 + Math.random() * 60,
      });
    }, 3000); // Faster transitions for more dynamic effect
    
    return () => {
      clearInterval(interval);
      clearInterval(spotlightInterval);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay - Increased size with scale */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 scale-125 transition-transform duration-30000 ease-linear transform-gpu"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroBg})`,
          animation: 'slowZoom 30s infinite alternate'
        }}
      />
      
      {/* Light Beams Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <div className="light-beam light-beam-1"></div>
        <div className="light-beam light-beam-2"></div>
        <div className="light-beam light-beam-3"></div>
        <div className="light-beam light-beam-1"></div>
        <div className="light-beam light-beam-2"></div>
        <div className="light-beam light-beam-3"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-30 max-w-3xl px-8" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img src={logo} alt="Anandadhara Logo" className="w-56 md:w-64 mb-2" />
            <div className="absolute -right-20 top-10 flex">
              {/* Clean, white 2k25 text with beautiful animation */}
              <div className="relative">
                <span className="text-2xl text-white animate-wave-float" style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0s' }}>2</span>
                <span className="text-4xl text-white animate-wave-float" style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.2s' }}>k</span>
                <span className="text-5xl font-bold text-white animate-wave-float" style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.4s' }}>2</span>
                <span className="text-7xl font-bold text-white animate-wave-float" style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.6s' }}>5</span>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl mt-4 mb-8 text-shadow-lg">Join us for an exciting celebration of music, dance, and culture!</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-10">
          <div className="countdown-box">
            <div className="text-2xl md:text-3xl font-bold">{String(countdown.days).padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">Days</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="countdown-box">
            <div className="text-2xl md:text-3xl font-bold">{String(countdown.hours).padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">Hours</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="countdown-box">
            <div className="text-2xl md:text-3xl font-bold">{String(countdown.minutes).padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">Minutes</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="countdown-box">
            <div className="text-2xl md:text-3xl font-bold">{String(countdown.seconds).padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">Seconds</div>
          </div>
        </div>
        
        {/* Animated CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#events" 
            className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Explore Events
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          
          <Link 
            to="/all-events" 
            className="group inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 overflow-hidden relative"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <span className="relative z-10 flex items-center">
              View All Events
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 transition-all duration-300 transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;