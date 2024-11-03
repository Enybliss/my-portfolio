import styled from "styled-components";

const About = () => {
  return (
    <Section id="about"> {/* ID for scroll targeting */}
      <Content>
        <ImageBox>
          <img src="https://res.cloudinary.com/df5zacepv/image/upload/v1730437040/profile_zqrc6m.jpg" alt="Profile" />
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
  padding: 100px 20px; /* Consistent padding */
  background-color: transparent; /* Light background color */
  color: #030303; /* Text color */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row; /* Arrange side-by-side on larger screens */
    justify-content: space-between; /* Space between text and image */
    align-items: flex-start; /* Align items at the top */
  }
`;

const TextBox = styled.div`
  flex: 1; /* Take up available space */
  max-width: 600px; /* Optional: Control max width */
  text-align: left; /* Left-align text */
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ImageBox = styled.div`
  flex: 1; /* Allow image to take up available space */
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    border-radius: 10%; /* Round the image edges */
    width: 100%; /* Full width */
    max-width: 400px; /* Limit max width */
    height: auto; /* Maintain aspect ratio */
  }
`;
