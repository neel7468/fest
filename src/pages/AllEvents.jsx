import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendarAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import footballImg from '../assets/images/football.jpg';

const AllEvents = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get('eventId');
  
  const events = [
    {
      id: 1,
      title: "Football Tournament",
      description: "Compete in our annual inter-college football championship with teams from across the region. Show your skills and teamwork to win exciting prizes.",
      fullDescription: "The Football Tournament is our flagship sporting event bringing together the best college teams from across the region. This year's tournament will feature 16 teams competing in a knockout format over three exciting days. Matches will be played on our newly renovated main ground with professional referees and state-of-the-art facilities.",
      image: footballImg,
      date: "May 17, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "College Main Ground",
      category: "Sports",
      registrationFee: "$20 per team",
      prizes: "1st Place: $500, 2nd Place: $300, 3rd Place: $150"
    },
    {
      id: 2,
      title: "Cricket League",
      description: "Join the excitement of our T20 cricket tournament featuring the best college teams. Experience thrilling matches and spectacular performances.",
      image: footballImg,
      date: "May 18, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "College Cricket Stadium",
      category: "Sports"
    },
    {
      id: 3,
      title: "Voice of Campus",
      description: "Show your singing talent on the big stage. This singing competition welcomes all genres and styles. Perform solo or with a group and win amazing prizes.",
      image: footballImg,
      date: "May 20, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "College Auditorium",
      category: "Cultural"
    },
    {
      id: 4,
      title: "Dance Fest",
      description: "Express yourself through dance performances. Solo, duet, and group categories available. All dance forms are welcome in this celebration of movement.",
      image: footballImg,
      date: "May 22, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "College Auditorium",
      category: "Cultural"
    },
    {
      id: 5,
      title: "Debate Competition",
      description: "Showcase your oratory skills and critical thinking in our annual debate competition. Topics will range from current affairs to philosophical questions.",
      image: footballImg,
      date: "May 19, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall",
      category: "Academic"
    },
    {
      id: 6,
      title: "Art Exhibition",
      description: "Display your artistic talents in our art exhibition. Paintings, sculptures, digital art, and photography are all welcome in this creative showcase.",
      image: footballImg,
      date: "May 21-23, 2025",
      time: "10:00 AM - 7:00 PM",
      location: "College Art Gallery",
      category: "Cultural"
    }
  ];

  // If eventId is present, show event details
  if (eventId) {
    const event = events.find(e => e.id === parseInt(eventId));
    
    if (!event) {
      return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16 px-[5%] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
            <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/all-events" 
              className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Events
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-black text-white pt-24 pb-16 px-[5%]">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <Link to="/all-events" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Events
            </Link>
          </div>
          
          <div className="bg-[#111] rounded-lg overflow-hidden shadow-xl">
            <div className="h-[300px] md:h-[400px] relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                {event.category}
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-white/80">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-primary text-xl" />
                  <div>
                    <p className="text-sm text-white/60">Date</p>
                    <p>{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white/80">
                  <FontAwesomeIcon icon={faClock} className="mr-3 text-primary text-xl" />
                  <div>
                    <p className="text-sm text-white/60">Time</p>
                    <p>{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white/80">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-primary text-xl" />
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">About This Event</h2>
                <p className="text-white/80 leading-relaxed">{event.fullDescription || event.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Registration Fee</h3>
                  <p className="text-white/80">{event.registrationFee || "Free Entry"}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Prizes</h3>
                  <p className="text-white/80">{event.prizes || "Certificates for all participants"}</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original AllEvents list view
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-[5%]">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center relative pb-4" data-aos="fade-up">
          All Events
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-secondary"></span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          <button className="px-4 py-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary">All</button>
          <button className="px-4 py-2 rounded-full hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary">Sports</button>
          <button className="px-4 py-2 rounded-full hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary">Cultural</button>
          <button className="px-4 py-2 rounded-full hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary">Academic</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden h-[220px]">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{event.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center text-white/80">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-white/80">
                    <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-white/80">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-primary" />
                    {event.location}
                  </div>
                </div>
                
               
                <Link 
                  to={`/all-events?eventId=${event.id}`} 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
                >
                  <span>View Details</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;