import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import footballImg from '../assets/images/football.jpg';

const EventDetail = () => {
  const { id } = useParams();
  
  // This would typically come from an API or context
  // For now, we'll hardcode the events data
  const events = [
    {
      id: 1,
      title: "Football Tournament",
      description: "Compete in our annual inter-college football championship with teams from across the region. Show your skills and teamwork to win exciting prizes.",
      fullDescription: "The Football Tournament is our flagship sporting event bringing together the best college teams from across the region. This year's tournament will feature 16 teams competing in a knockout format over three exciting days. Matches will be played on our newly renovated main ground with professional referees and state-of-the-art facilities. Spectators can enjoy food stalls, music, and a festive atmosphere throughout the tournament. Don't miss the grand finale which will include a special halftime show and prize distribution ceremony by notable sports personalities.",
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
      fullDescription: "The Cricket League is a fast-paced T20 format tournament featuring 8 college teams competing for the championship trophy. Each team will play in a round-robin format followed by semi-finals and finals. The matches will be held at our college cricket stadium with electronic scoreboards and professional umpires. This year's tournament will also feature a special exhibition match between faculty and alumni teams. Food and refreshment stalls will be available throughout the tournament days.",
      image: footballImg,
      date: "May 18, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "College Cricket Stadium",
      category: "Sports",
      registrationFee: "$25 per team",
      prizes: "1st Place: $600, 2nd Place: $350, 3rd Place: $200"
    },
    {
      id: 3,
      title: "Voice of Campus",
      description: "Show your singing talent on the big stage. This singing competition welcomes all genres and styles. Perform solo or with a group and win amazing prizes.",
      fullDescription: "Voice of Campus is our premier singing competition that showcases the vocal talents of students across colleges. Participants can perform solo or in groups, and all music genres are welcome. The competition will be judged by professional musicians and industry experts. The event will be held in our state-of-the-art auditorium with professional sound and lighting systems.",
      image: footballImg,
      date: "May 20, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "College Auditorium",
      category: "Cultural",
      registrationFee: "$10 per participant",
      prizes: "1st Place: $400, 2nd Place: $250, 3rd Place: $150"
    },
    {
      id: 4,
      title: "Dance Fest",
      description: "Express yourself through dance performances. Solo, duet, and group categories available. All dance forms are welcome in this celebration of movement.",
      fullDescription: "Dance Fest is a vibrant celebration of movement and rhythm featuring performances in various dance styles. Categories include solo, duet, and group performances. All dance forms from classical to contemporary, folk to hip-hop are welcome. The event will be judged by professional choreographers and dance instructors.",
      image: footballImg,
      date: "May 22, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "College Auditorium",
      category: "Cultural",
      registrationFee: "$15 per group",
      prizes: "1st Place: $450, 2nd Place: $300, 3rd Place: $200"
    },
    {
      id: 5,
      title: "Debate Competition",
      description: "Showcase your oratory skills and critical thinking in our annual debate competition. Topics will range from current affairs to philosophical questions.",
      fullDescription: "The Debate Competition is an intellectual battleground where participants can showcase their oratory skills, critical thinking, and persuasive abilities. Topics will range from current affairs and social issues to philosophical and ethical questions. Participants can compete individually or in teams of two.",
      image: footballImg,
      date: "May 19, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall",
      category: "Academic",
      registrationFee: "Free Entry",
      prizes: "1st Place: $300, 2nd Place: $200, Best Speaker: $100"
    },
    {
      id: 6,
      title: "Art Exhibition",
      description: "Display your artistic talents in our art exhibition. Paintings, sculptures, digital art, and photography are all welcome in this creative showcase.",
      fullDescription: "The Art Exhibition is a platform for students to display their artistic talents and creative expressions. All forms of visual art including paintings, drawings, sculptures, installations, digital art, and photography are welcome. The exhibition will be open to the public for three days, allowing artists to showcase their work to a wide audience.",
      image: footballImg,
      date: "May 21-23, 2025",
      time: "10:00 AM - 7:00 PM",
      location: "College Art Gallery",
      category: "Cultural",
      registrationFee: "$5 per submission",
      prizes: "Best in Show: $350, People's Choice: $200"
    }
  ];
  
  // Convert id to number since URL parameters are strings
  const numId = parseInt(id);
  console.log("Looking for event with ID:", numId);
  
  const event = events.find(e => e.id === numId);
  console.log("Found event:", event);
  
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
};

export default EventDetail;