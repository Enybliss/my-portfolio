import styled from "styled-components";

const Projects = () => {
  const projectList = [
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841358/Screenshot_2024-11-04_212027_pz4tdi.png",
      projectLink: "https://my-portfolio-three-zeta-72.vercel.app/",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841345/Screenshot_2024-11-05_221555_p54gzb.png",
      projectLink: "https://enybliss.github.io/MakeRemote/",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841216/Screenshot_2024-11-05_211920_qusyik.png",
      projectLink: "https://example.com/project-two",
    },

    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841216/Screenshot_2024-11-05_212317_vq3mmg.png",
      projectLink: "https://example.com/project-two",
    },

    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841214/Screenshot_2024-11-05_212741_fhw5pe.png",
      projectLink: "https://example.com/project-two",
    },

    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730837823/Screenshot_2024-11-04_212145_n53vho.png",
      projectLink: "coolors-project-md5s.vercel.app",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730837694/weatherapp_swntr4.jpg",
      projectLink: "https://example.com/project-two",
    },
    {
      imageUrl: "https://res.cloudinary.com/df5zacepv/image/upload/v1730841181/DesktopDarkMode_pwiqqc.jpg",
      projectLink: "https://example.com/project-two",
    },


    // Add more projects as needed
  ];

  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectLink key={index} href={project.projectLink} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.imageUrl} alt={`Project ${index + 1}`} />
          </ProjectLink>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: blueviolet;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectLink = styled.a`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;
