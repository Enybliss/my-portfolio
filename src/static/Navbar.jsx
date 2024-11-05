import styled from "styled-components";
import { Link } from "react-scroll"; 
import { useState } from "react";

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setCurrentSection(section); // Update current section
    setIsOpen(false); // Close the menu on mobile
  };

  return (
    <Nav className="navbar">
      <h2>My Portfolio</h2>
      <MenuIcon onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </MenuIcon>
      <NavList isOpen={isOpen}>
        <li>
          <StyledLink
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick('hero')}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick('about')}
          >
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="techstack"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick('techstack')}
          >
            Tech Stack
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navbar;




const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: none;

  h2 {
    color: blueviolet;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  color: blueviolet;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block; /* Show menu icon only on smaller screens */
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 0px;
  padding: 0;
  gap: 20px;
  list-style: none;
  justify-content: center;
  color: blueviolet;

  /* Responsive: hide NavList on small screens unless menu is open */
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  li {
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 900;
    color: blueviolet;
  }

  li:hover {
    color: #FF6347;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;
