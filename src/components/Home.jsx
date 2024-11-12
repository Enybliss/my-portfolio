import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container id="hero">
      <Textbox>
        <h2>Hi, I am</h2>
        <h1><span className="highlight">Blessing Udebuani</span></h1>
        <p>Front-end Developer</p>
        <h3>Check out my work and get to know me better!</h3>
        <ButtonGroup>
          <DownloadButton
            href="/BLESSING_ENE_UDEBUANI_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download CV
          </DownloadButton>
          <ContactButton onClick={scrollToContact}>
            Contact Me
          </ContactButton>
        </ButtonGroup>
      </Textbox>
      <ProfileImage
        src="https://res.cloudinary.com/df5zacepv/image/upload/v1730478693/pic_fuondw.jpg"
        alt="profile"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  margin: auto;
  height: 100vh;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 2rem;
    text-align: left;
    gap: 2rem;
  }

  span {
    color: #FF6347;
  }
`;

const Textbox = styled.div`
  max-width: 500px;
  padding: 1.5rem 0;

  h2 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin-top: 50px;
  }

  h1 {
    font-size: 2.3rem;
    line-height: 1;
  }

  p {
    font-size: 1.1rem;
    line-height: 1;
  }

  h3 {
    font-size: 1rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    h2 {
      font-size: 1.2rem;
    }
    h1 {
      font-size: 2rem;
    }
    p,
    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    gap: 1rem; /* Adds space between text and buttons */
    text-align: center; /* Ensures center alignment on smaller screens */
  }
`;

const ProfileImage = styled.img`
  width: 80%;
  max-width: 250px;
  height: auto;
  border-radius: 10%;
  border: 2px solid #FF6347;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 250px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 70%; /* Make image smaller for small screens */
    max-width: 200px; /* Adjust image size */
    margin: 0 auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  justify-content: center; /* Centers buttons on small screens */

  @media (min-width: 768px) {
    justify-content: flex-start; /* Align buttons to the left on larger screens */
  }
`;

const DownloadButton = styled.a`
  width: 140px;
  height: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
  background-color: #FF6347;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533f;
  }
`;

const ContactButton = styled.button`
  width: 140px;
  height: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
  background-color: #FF6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533f;
  }
`;
