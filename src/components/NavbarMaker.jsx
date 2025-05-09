import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredTab, setHoveredTab] = React.useState(null);
  const navRef = React.useRef(null);

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

  // Close menu when route changes
  React.useEffect(() => {
    return () => {
      setIsMenuOpen(false);
    };
  }, []);

  const pages = [
    ["/", "Home"],
    ["/achievements", "Achievements"],
    ["/about", "About Me"],
    ["/projects", "Projects"],
    ["/contact", "Contact"],
  ];

  return (
    <nav ref={navRef} className="bg-black/30 backdrop-blur-md border-b border-red-500/20 flex items-center justify-between px-4 py-3 z-50 relative">
      <Link to="/" className="flex items-center space-x-2">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <FaBitcoin className="text-red-500 text-2xl sm:text-3xl" />
          <motion.div 
            className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div className="font-spaceGrotesk font-bold text-xl sm:text-2xl tracking-wider">
          <span className="text-white">JASONBALAYEV</span>
          <span className="text-red-500">.DEV</span>
        </div>
      </Link>
 
      <div className="sm:hidden z-50">
        <div 
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <Hamburger 
            toggled={isMenuOpen} 
            toggle={setIsMenuOpen} 
            color="white" 
            size={24} 
            duration={0.3}
          />
          <motion.div 
            className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
 
      <div className="hidden sm:flex items-center space-x-1">
        {pages.map((page) => (
          <Link
            key={page[0]}
            to={page[0]}
            className="relative group px-4 py-2"
            onMouseEnter={() => setHoveredTab(page[0])}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <div className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 font-spaceGrotesk font-medium tracking-wide uppercase text-sm">
              {page[1]}
 
              <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredTab === page[0] ? "100%" : "-100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </div>

            <AnimatePresence>
              {hoveredTab === page[0] && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-rose-600/10 to-red-600/10 rounded-md z-0 overflow-hidden"
                  layoutId="hoverTab"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-red-500/40" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-500/40" />
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-red-500/40" />
                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-red-500/40" />
                    <div className="h-[1px] w-1/2 bg-red-500/40 absolute top-[30%] right-0" />
                    <div className="h-[1px] w-1/3 bg-red-500/40 absolute top-[70%] left-0" />
                    <div className="w-[1px] h-1/2 bg-red-500/40 absolute left-[30%] bottom-0" />
                    <div className="w-[1px] h-1/3 bg-red-500/40 absolute right-[20%] top-0" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-md" />
                  <motion.div 
                    className="absolute h-1 w-1 rounded-full bg-red-500"
                    animate={{ 
                      x: ["0%", "100%"],
                      y: ["0%", "100%"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
  
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-red-500/20 flex flex-col items-center sm:hidden z-40 overflow-hidden"
          >
            {pages.map((page) => (
              <Link
                key={page[0]}
                to={page[0]}
                className="w-full"
                onClick={() => setIsMenuOpen(false)} 
              >
                <div className="relative py-4 px-6 text-gray-300 text-lg transition-all duration-300 hover:text-white hover:bg-red-900/20 border-b border-red-500/10 overflow-hidden">
                  <div className="relative z-10 flex items-center font-spaceGrotesk tracking-wide">
                    <div className="mr-3 text-red-500 opacity-70">
                      {page[0] === "/" && <span className="text-xs">₿</span>}
                      {page[0] === "/about" && <span className="text-xs">Ξ</span>}
                      {page[0] === "/projects" && <span className="text-xs">◎</span>}
                      {page[0] === "/achievements" && <span className="text-xs">✨</span>}
                      {page[0] === "/contact" && <span className="text-xs">₮</span>}
                    </div>
                    {page[1]}
                  </div>
                  
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-red-500/40" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-500/40" />
                    <div className="h-[1px] w-1/2 bg-red-500/40 absolute top-[50%] right-0" />
                    <div className="w-[1px] h-1/2 bg-red-500/40 absolute left-[30%] top-0" />
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-rose-600/10 to-red-600/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500/40 via-rose-500/40 to-red-500/40"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;