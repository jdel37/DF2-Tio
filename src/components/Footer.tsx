import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];
  
  const services = [
    { name: "Strategic Management", href: "#" },
    { name: "Digital Transformation", href: "#" },
    { name: "Financial Advisory", href: "#" },
    { name: "Organizational Development", href: "#" },
    { name: "Global Operations", href: "#" }
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E76B8] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <img  className="w-32 md:w-44 sm:w-24 max-w-full h-auto" src="/public/images/logo-03-300 dpi.png" alt="" />
            </div>
            <p className="text-white/70 mb-6">
              Transforming businesses through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-[#1E76B8] p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-[#1E76B8] p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-[#1E76B8] p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-[#1E76B8] p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleScroll(link.href)}
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a 
                    href={service.href}
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="px-4 py-2 w-full bg-[#1E76B8] border border-blue-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-white/50"
                />
                <button 
                  type="submit"
                  className="bg-[#DF1021] hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <p className="text-xs text-white/50">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <hr className="border-[#1E76B8] my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} StratEdge Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;