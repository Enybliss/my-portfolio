import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Textbox>
        <h2>Hi, I am</h2>
        <h1><span className="highlight">Blessing Udebuani</span></h1>
        <p>Front-end Developer</p>
        <h3>Check out my work and get to know me better!</h3>
        <DownloadButton
          href="/BLESSING_ENE_UDEBUANI_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </DownloadButton>
      </Textbox>
      <ProfileImage
        src="https://res.cloudinary.com/df5zacepv/image/upload/v1730478693/pic_fuondw.jpg"
        alt="profile"
      />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  margin: auto; /* Centers vertically */
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
  }

  h1 {
    font-size: 2.3rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    h2 {
      font-size: 2.2rem;
    }
    h1 {
      font-size: 2.8rem;
    }
    p, h3 {
      font-size: 1.2rem;
    }
  }
`;

const ProfileImage = styled.img`
  width: 80%;
  max-width: 250px; /* Reduced max width for better fit */
  height: auto;
  border-radius: 10%;
  border: 2px solid #FF6347;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 450px;
    margin-top: 0;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 1.25rem;
  padding: 0.75rem 1.5rem;
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
