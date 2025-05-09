import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { scrollToTop } from "../utils/scrollToTop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("/");
  const navRef = React.useRef(null);

  // Set active tab based on current path
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setActiveTab(path);
    }
  }, []);

  // Close menu when clicking outside
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
    ["/projects", "Projects"],
    ["/achievements", "Achievements"],
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
      className="sticky top-0 z-50 backdrop-blur-md border-b border-blue-500/10 bg-[#050a14]/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-md bg-blue-500 blur-md opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCode className="text-white text-xl" />
                </motion.div>
              </div>
              <div className="font-spaceGrotesk font-bold text-xl tracking-wider">
                <span className="text-white">CALEB</span>
                <span className="text-blue-500">BENNETT</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {pages.map((page) => (
              <Link
                key={page[0]}
                to={page[0]}
                className="relative group"
                onClick={handleNavigation}
              >
                <div className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTab === page[0] 
                    ? "text-white bg-blue-500/10" 
                    : "text-gray-300 hover:text-white hover:bg-blue-500/5"
                }`}>
                  {page[1]}
                </div>
                {activeTab === page[0] && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="navbar-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 origin-left"
                  initial={false}
                  whileHover={{ scaleX: activeTab === page[0] ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <div className="relative">
              <Hamburger 
                toggled={isMenuOpen} 
                toggle={setIsMenuOpen} 
                size={20}
                color="#3b82f6"
                rounded
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#050a14]/95 backdrop-blur-md border-b border-blue-500/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => (
                <Link
                  key={page[0]}
                  to={page[0]}
                  onClick={handleNavigation}
                >
                  <motion.div
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeTab === page[0]
                        ? "text-white bg-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                    }`}
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