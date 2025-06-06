import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <Content>
        <ImageBox>
          <img
            src="https://res.cloudinary.com/df5zacepv/image/upload/v1730437040/profile_zqrc6m.jpg"
            alt="Profile"
          />
        </ImageBox>
        <TextBox>
          <h2>About Me</h2>
          <p>
            I am a Software Engineer with a solid background in frontend development and growing expertise in backend technologies. Proficient in HTML, CSS, Bootstrap, JavaScript, and ReactJS, I focus on creating dynamic, responsive user interfaces.
          </p>
          <p>
            I’m expanding my skills in NodeJS and TypeScript for full-stack development and have experience with version control using Git and GitHub, as well as deploying projects on Vercel. Committed to clean code and user-centered design, I thrive on problem-solving and continuous learning, bringing adaptability and curiosity to any team.
          </p>
        </TextBox>
      </Content>
    </Section>
  );
};

export default About;

// Styled components
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: transparent;
  color: #030303;
  margin-top: 4rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem; /* Increased gap for better spacing on larger screens */
  }
`;

const TextBox = styled.div`
  flex: 1;
  max-width: 700px; /* Increased max-width for a wider appearance */
  text-align: center;
  padding: 1.5rem;

  h2 {
    font-size: 2rem; /* Slightly larger heading font */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    border-radius: 10%;
    width: 100%;
    max-width: 550px; /* Increased max-width for a wider image */
    height: auto;
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    max-width: 400px; /* Wider image on larger screens */
    padding: 1rem;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px; /* Adjusted image size for smaller screens */
    }
  }
`;
