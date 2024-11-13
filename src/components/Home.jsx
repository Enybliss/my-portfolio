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
  padding: 1rem 0.5rem;
  margin: auto;
  height: 100vh;
  gap: 1rem;

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
  max-width: 600px; /* Increased width for larger screens */
  padding: 1rem 0;

  h2 {
    font-size: 2rem; /* Larger font size */
    line-height: 1.3;
    margin-top: 50px;
  }

  h1 {
    font-size: 1.5rem; /* Larger font size */
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem; /* Larger font size */
    margin: 0.5rem 0;
  }

  h3 {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;

    h2 { font-size: 2rem; }
    h1 { font-size: 3rem; }
    p { font-size: 1.5rem; }
    h3 { font-size: 1.2rem; }
  }
`;

const ProfileImage = styled.img`
  width: 90%; /* Larger image width */
  max-width: 280px; /* Increased max width */
  height: auto;
  border-radius: 10%;
  border: 3px solid #FF6347; /* Thicker border for better emphasis */
  margin-top: 1rem;

  @media (min-width: 768px) {
    max-width: 350px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 70%;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const DownloadButton = styled.a`
  width: 160px; /* Increased button width */
  height: 50px; /* Increased button height */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem; /* Slightly larger font size */
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
  width: 160px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
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
