const Footer = () => {
    return (
      <footer className="bg-black pt-16 pb-6 text-white/80">
        <div className="container mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Events 2K25</h3>
              <p>Celebrating talent and sportsmanship</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#events" className="hover:text-primary transition-colors duration-300">Events</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors duration-300">Schedule</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="mb-4">Subscribe to our newsletter for event updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-1 py-2 px-3 bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:border-primary"
                />
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-r-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Anandadhara Events. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;