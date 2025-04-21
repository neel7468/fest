const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1 - March 15",
      events: [
        {
          time: "9:00 AM - 12:00 PM",
          title: "Football Tournament - Preliminary Rounds",
          location: "Main Ground"
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "Voice of Campus - Auditions",
          location: "Auditorium"
        }
      ]
    },
    {
      day: "Day 2 - March 18",
      events: [
        {
          time: "10:00 AM - 1:00 PM",
          title: "Cricket League - Opening Matches",
          location: "Cricket Ground"
        },
        {
          time: "3:00 PM - 6:00 PM",
          title: "Dance Workshop",
          location: "Dance Studio"
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 px-[5%] bg-[#111]">
      <h2 
        className="text-center text-4xl font-bold mb-12 text-white relative pb-4"
        data-aos="fade-up"
      >
        Event Schedule
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-secondary"></span>
      </h2>
      
      <div 
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {scheduleData.map((day, index) => (
          <div key={index} className="mb-10 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-white">{day.day}</h3>
            
            {day.events.map((event, eventIndex) => (
              <div key={eventIndex} className="flex flex-col md:flex-row gap-4 mb-6 p-6 bg-black/50 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300">
                <span className="text-primary font-medium min-w-[180px]">{event.time}</span>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{event.title}</h4>
                  <p className="text-white/70">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;