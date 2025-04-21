import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/event1.jpeg';
import image2 from '../assets/images/football.jpg';
import image3 from '../assets/images/football.jpg';
import image4 from '../assets/images/football.jpg';
import image5 from '../assets/images/football.jpg';
import image6 from '../assets/images/football.jpg';

const Gallery = () => {
  // Array of different images
  const images = [image1, image2, image3, image4, image5, image6];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Create a slideshow effect
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-20 px-[5%] bg-[#0a0a0a]">
      <h2 
        className="text-center text-4xl font-bold mb-12 text-white relative pb-4"
        data-aos="fade-up"
      >
        Event Gallery
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-secondary"></span>
      </h2>
      
      <div className="max-w-6xl mx-auto">
        {/* Featured Image Slideshow */}
        <div 
          className="relative h-80 md:h-96 mb-8 overflow-hidden rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={image} 
                alt={`Featured Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-lg font-semibold">Event Moment {index + 1}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-white/50'}`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-primary scale-105' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveIndex(index)}
              data-aos="zoom-in"
              data-aos-delay={50 * index}
            >
              <img 
                src={image} 
                alt={`Gallery Thumbnail ${index + 1}`} 
                className="w-full h-20 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Add link to All Events page */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            to="/all-events" 
            className="inline-block px-10 py-4 bg-transparent text-white border-2 border-primary rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:shadow-lg hover:shadow-primary/40"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;