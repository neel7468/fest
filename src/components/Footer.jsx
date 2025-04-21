const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-6 text-white/80">
      <div className="container mx-auto px-[5%]">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Left Block */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Events 2K25</h3>
            <p>Celebrating talent and sportsmanship</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="hover:text-primary transition-colors duration-300">Events</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors duration-300">Schedule</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for event updates</p>
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 py-2 px-4 bg-white/10 border border-white/20 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:border-primary placeholder-white/60 text-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-md sm:rounded-r-md sm:rounded-l-none hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Anandadhara Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
