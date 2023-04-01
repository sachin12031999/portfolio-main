import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = ({ onNavItemClick }) => {
  const handleNavItemClick = (section) => {
    onNavItemClick(section);
    scroll.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav className="bg-black text-white flex justify-between px-8 py-6">
      <div>
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex space-x-8">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => handleNavItemClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => handleNavItemClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => handleNavItemClick("portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => handleNavItemClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => handleNavItemClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
