import styled from "styled-components";

const Projects = () => {
  const projectList = [
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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  width: 200px; /* Fixed width */
  height: 250px; /* Fixed height */
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
`;

const CardContent = styled.div`
  padding: 0.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const TechStack = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

const ActionButton = styled.a`
  flex: 1;
  text-align: center;
  padding: 0.3rem;
  font-size: 0.8rem;
  color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e16838;
    color: white;
  }
`;
