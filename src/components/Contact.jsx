import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-[5%] bg-[#111]">
      <h2 
        className="text-center text-4xl font-bold mb-12 text-white relative pb-4"
        data-aos="fade-up"
      >
        Contact Us
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-secondary"></span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        <div 
          className="flex-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex items-start mb-8">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl mt-1 mr-4" />
            <p className="text-white/80">123 College Street, Campus Area, City</p>
          </div>
          
          <div className="flex items-start mb-8">
            <FontAwesomeIcon icon={faPhone} className="text-primary text-xl mt-1 mr-4" />
            <p className="text-white/80">+1 234 567 8900</p>
          </div>
          
          <div className="flex items-start mb-8">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl mt-1 mr-4" />
            <p className="text-white/80">events2k25@college.edu</p>
          </div>
          
          <div className="flex gap-4 mt-10">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        
        <form 
          className="flex-1 flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none text-white"
          />
          
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none text-white"
          />
          
          <select 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none text-white"
            defaultValue=""
          >
            <option value="" disabled>Select Event</option>
            <option value="football">Football Tournament</option>
            <option value="cricket">Cricket League</option>
            <option value="singing">Voice of Campus</option>
            <option value="dancing">Dance Fest</option>
          </select>
          
          <textarea 
            placeholder="Your Message" 
            required 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none text-white min-h-[150px]"
          ></textarea>
          
          <button 
            type="submit" 
            className="py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;