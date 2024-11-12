import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setCurrentSection(section);
    setIsOpen(false); // Close menu on item click (for mobile)
  };

  return (
    <Nav>
      <h2>My Portfolio</h2>
      <MenuIcon onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </MenuIcon>
      <NavList isOpen={isOpen}>
        <li>
          <StyledLink
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("hero")}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("about")}
          >
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="techstack"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("techstack")}
          >
            Tech Stack
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("contact")}
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
  background-color: rgb(227, 178, 240);
  

  h2 {
    color: blueviolet;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    h2 {
      font-size: 1.2rem; /* Adjust font size for smaller screens */
    }
  }
`;

const MenuIcon = styled.div`
  font-size: 1.8rem;
  color: blueviolet;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  color: blueviolet;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0px;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 90%; /* Make it span the width for better visibility */
    max-width: 250px; /* Set a max width */
    gap: 15px; /* Space between menu items */
  }

  li {
    font-weight: 900;
    color: blueviolet;
    margin: 0.5rem 0; /* Add vertical spacing between items */
  }

  li:hover {
    color: #FF6347;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 0; /* Add padding for touch-friendly links */
  }
`;
