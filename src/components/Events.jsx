import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import footballImg from '../assets/images/football.jpg';
// Replace the missing image with a placeholder URL
const concertBg = 'https://via.placeholder.com/1920x1080?text=Concert+Background';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Football Tournament",
      description: "Compete in our annual inter-college football championship",
      image: footballImg,
      date: { day: "15", month: "Mar" },
      delay: 100
    },
    {
      id: 2,
      title: "Cricket League",
      description: "Join the excitement of our T20 cricket tournament",
      image: footballImg,
      date: { day: "18", month: "Mar" },
      delay: 200
    },
    {
      id: 3,
      title: "Voice of Campus",
      description: "Show your singing talent on the big stage",
      image: footballImg,
      date: { day: "20", month: "Mar" },
      delay: 300
    },
    {
      id: 4,
      title: "Dance Fest",
      description: "Express yourself through dance performances",
      image: footballImg,
      date: { day: "22", month: "Mar" },
      delay: 400
    }
  ];

  return (
    <section id="events" className="relative py-24 px-[5%] text-white overflow-hidden min-h-screen">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-2] filter grayscale-[30%]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(${concertBg})` 
        }}
      />
      
      {/* Stage Lights */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-0 h-0 border-solid border-transparent border-b-[rgba(0,229,216,0.15)] border-l-[150px] border-r-[150px] border-b-[500px] origin-bottom animate-light-move"></div>
        <div className="absolute top-[-10%] right-[25%] w-0 h-0 border-solid border-transparent border-b-[rgba(198,0,255,0.15)] border-l-[150px] border-r-[150px] border-b-[500px] origin-bottom animate-light-move delay-200"></div>
        <div className="absolute top-[-10%] left-[50%] w-0 h-0 border-solid border-transparent border-b-[rgba(255,58,58,0.15)] border-l-[150px] border-r-[150px] border-b-[500px] origin-bottom animate-light-move delay-400"></div>
      </div>
      
      <h2 
        className="text-center text-4xl font-bold mb-12 text-white relative pb-4 drop-shadow-lg"
        data-aos="fade-up"
      >
        Featured Events
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/80"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="event-card group"
            data-aos="fade-up"
            data-aos-delay={event.delay}
          >
            <div className="relative overflow-hidden h-[220px]">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 filter grayscale-[30%] contrast-[120%] group-hover:grayscale-0 group-hover:contrast-[110%] group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white p-2.5 rounded shadow-md shadow-primary/40 text-center">
                <span className="block text-2xl font-bold">{event.date.day}</span>
                <span className="block text-sm uppercase">{event.date.month}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">{event.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{event.description}</p>
              <Link to={`/event/${event.id}`} className="animated-btn">
                <span>View Details</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12" data-aos="fade-up">
        <Link 
          to="/all-events" 
          className="inline-block px-10 py-4 bg-transparent text-white border-2 border-primary rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:shadow-lg hover:shadow-primary/40 relative overflow-hidden z-10"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
};

export default Events;