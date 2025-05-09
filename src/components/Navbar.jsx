import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { scrollToTop } from "../utils/scrollToTop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrolled]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const pages = [
    ["/", "Home"],
    ["/experiences", "Experiences"],
    ["/projects", "Projects"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  const handleNavigation = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <motion.nav 
      ref={navRef} 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-blue-900/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleNavigation}>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                  <FaLaptopCode className="text-white text-lg" />
                </div>
                <span className="text-xl text-white">calebharp.dev</span>
              </motion.div>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <div className="flex space-x-1 bg-black/40 rounded-full px-1 py-1 backdrop-blur-sm">
              {pages.map((page) => (
                <Link
                  key={page[0]}
                  to={page[0]}
                  onClick={handleNavigation}
                >
                  <motion.div
                    className="px-4 py-2 text-sm rounded-full transition-colors duration-200 text-gray-300 hover:text-white hover:bg-white/5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {page[1]}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="sm:hidden flex items-center">
            <div className="relative">
              <Hamburger 
                toggled={isMenuOpen} 
                toggle={setIsMenuOpen} 
                size={20}
                color={scrolled ? "#ffffff" : "#ffffff"}
                rounded
              />
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-800">
              {pages.map((page) => (
                <Link
                  key={page[0]}
                  to={page[0]}
                  onClick={handleNavigation}
                >
                  <motion.div
                    className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {page[1]}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;