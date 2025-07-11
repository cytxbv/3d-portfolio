import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./TopNav.css";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Experiences', href: '/experience' },
    { name: 'My Projects', href: '/projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if the current page matches the nav item
  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          <div className="navbar-logo">
            {/* <div className="logo-icon">
              
            </div> */}
          </div>

          {/* Navigation Items */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
};

export default TopNav;