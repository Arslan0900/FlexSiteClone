import React from 'react';
import style from "./Style/Navbar.module.scss";
import { Link } from 'react-scroll';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation hook

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const currentPath = location.pathname; // Get current path

  const toggleBtn = () => {
    setOpen(!open);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  const handleContactClick = () => {
    closeMenu();
    navigate('/Contact'); // Navigate to the contact route
  }

  const handleHomeClick = () => {
    closeMenu();
    navigate('/'); // Navigate to the home route
  }

  // Render logo only on '/Contact' route
  const renderLogo = () => {
    if (currentPath === '/Contact') {
      return (
        <div className={style.logo}>
          <Link onClick={handleHomeClick} to='Home' spy={true} smooth={true} offset={-100} duration={1000}>
            <img src='./pics/logoColorFull.svg' alt='logo' />
          </Link>
        </div>
      );
    } else {
      return (
        <div className={style.logo}>
          <Link onClick={handleHomeClick} to='Home' spy={true} smooth={true} offset={-100} duration={1000}>
            <img src='./pics/logoColorFull.svg' alt='logo' />
          </Link>
          <span className={`${style.burgerIcone} fa fa-bars`} onClick={toggleBtn}></span>
        </div>
      );
    }
  };

  // Conditionally render the menu based on the current path
  const renderMenu = () => {
    if (currentPath !== '/Contact') {
      return (
        <div className={`${open && style.menu2} ${style.menu}`}>
          <ul>
            <li>
              <Link to='Home' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to='Process' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Process</p>
              </Link>
            </li>
            <li>
              <Link to='Testimonial' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Testimonial</p>
              </Link>
            </li>
            <li>
              <Link to='Services' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link to='Facts' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Facts</p>
              </Link>
            </li>
            <li>
              <Link to='About' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to='Pricing' spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>
                <p>Pricing</p>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  // Render contact button only if not on '/Contact' route
  const renderContactButton = () => {
    if (currentPath !== '/Contact') {
      return (
        <div onClick={handleContactClick} className={style.button}>Contact</div>
      );
    }
  };

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.container}>
          <div className={style.nevManuFlex}>
            {renderLogo()} {/* Render logo based on the route */}
            {renderMenu()} {/* Render the menu based on the condition */}
            {renderContactButton()} {/* Render contact button based on the route */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
