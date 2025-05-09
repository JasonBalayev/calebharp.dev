import React from "react";
import NavbarMaker from "./NavbarMaker";
import GeometricBackground from "./GeometricBackground";
import { useLocation } from "@reach/router";

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[#050a14] text-white relative font-mono">
      <GeometricBackground />
      <NavbarMaker />
      <div className="h-auto px-4 sm:px-10 lg:px-24 py-4 text-xl relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout; 