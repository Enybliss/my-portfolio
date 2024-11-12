import styled from "styled-components";

const Projects = () => {
  const projectList = [
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },

    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841345/Screenshot_2024-11-05_221555_p54gzb.png",
      title: "Make Remote",
      liveLink: "https://enybliss.github.io/MakeRemote/",
      codeLink: "https://github.com/Enybliss/MakeRemote.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730837694/weatherapp_swntr4.jpg",
      title: "weather App",
      liveLink: "https://weather-app-seven-mu-50.vercel.app/",
      codeLink: "https://github.com/sarahannie/weather_app.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841214/Screenshot_2024-11-05_212741_fhw5pe.png",
      title: "calculator",
      liveLink: " https://enybliss.github.io/Calculator-project/",
      codeLink: "https://github.com/Enybliss/Calculator-project.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730837823/Screenshot_2024-11-04_212145_n53vho.png",
      title: "Coolors",
      liveLink: "https://coolors-project.vercel.app/",
      codeLink: "https://github.com/Enybliss/CoolorsProject.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      title: "My Portfolio",
      liveLink: "https://my-portfolio-three-zeta-72.vercel.app/",
      codeLink: "https://github.com/Enybliss/my-portfolio.git",
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={`Project ${index + 1}`} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <TechStack>Tech stack: {project.techStack}</TechStack>
              <ButtonGroup>
                <ActionButton href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Preview</ActionButton>
                <ActionButton href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</ActionButton>
              </ButtonGroup>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: none;
  padding: 70px;
`;

const Title = styled.h2`
  font-size: .5rem;
  margin-bottom: rem;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  width: 100%; /* Use 100% for flexibility */
  max-width: 300px; /* Optional: max-width to keep a reasonable size */
  height: auto; /* Auto height based on content */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100px; /* Reduced height */
  object-fit: cover;
  padding: 0px;
`;

const CardContent = styled.div`
  padding: 0.5rem;
  background: #161515;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: #fef6f6;
  margin: 0.5rem 0;
  white-space: normal; /* Allow wrapping of long titles */
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const TechStack = styled.p`
  font-size: 0.8rem;
  color: #f6f2f2;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

const ActionButton = styled.a`
  text-align: center;
  padding: 0.3rem;
  font-size: 0.8rem;
  color: #f8f5f5;
  border: 1px solid #fffcfc;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  display: block; /* Make the button block level to fit width */
  width: 100%; /* Button takes up full width */
  box-sizing: border-box; /* Include padding in width */

  &:hover {
    background-color: #e16838;
    color: white;
  }
`;

