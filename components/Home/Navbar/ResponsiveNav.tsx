"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleOpenNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={handleOpenNav} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
