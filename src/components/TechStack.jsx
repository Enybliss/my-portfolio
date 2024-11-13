import React from "react";
import styled from "styled-components";

const TechStack = () => {
  // Define your Cloudinary URLs here
  const ICONS = {
    html5: "https://res.cloudinary.com/df5zacepv/image/upload/v1730782780/html-5_1_zip7ct.svg",
    css3: "https://res.cloudinary.com/df5zacepv/image/upload/v1730785877/css3_qgykvk.svg",
    sass: "https://res.cloudinary.com/df5zacepv/image/upload/v1730437105/logos_sass_hqrgh7.png",
    javascript: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794766/javascript-1_ejupig.svg",
    react: "https://res.cloudinary.com/df5zacepv/image/upload/v1730795241/react-2_gwerzy.svg",
    bootstrap: "https://res.cloudinary.com/df5zacepv/image/upload/v1730437105/logos_bootstrap_xpr2fr.png",
    git: "https://res.cloudinary.com/df5zacepv/image/upload/v1730795107/git-icon_kwsal0.svg",
    figma: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794048/7564187_figma_logo_brand_icon_yrc0g1.png",
    nodejs: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794766/nodejs-icon_rbvmss.svg",
    typescript: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794766/typescript-2_ylw7oo.svg",
    vscode: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794884/visual-studio-code-1-1_jzmtyf.svg",
    github: "https://res.cloudinary.com/df5zacepv/image/upload/v1730794884/github-icon-1_brvryn.svg",
  };

  return (
    <SkillsContainer id="techstack"> {/* Add the id here */}
      <SkillSection>
        <Title>Using Now</Title>
        <SkillsGrid>
          {Object.entries(ICONS).slice(0, 10).map(([key, url]) => (
            <SkillCard key={key}>
              <Icon src={url} alt={key} />
              <span>{key.toUpperCase()}</span>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillSection>

      <SkillSection>
        <Title>Learning</Title>
        <LearningGrid>
          <SkillCard>
            <Icon src={ICONS.nodejs} alt="NodeJS" />
            <span>NodeJS</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.typescript} alt="TypeScript" />
            <span>TypeScript</span>
          </SkillCard>
        </LearningGrid>
      </SkillSection>
    </SkillsContainer>
  );
};

export default TechStack;

// Styled Components
const SkillsContainer = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  color: #333;
  background-color: none;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

const LearningGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #333;

  span {
    margin-top: 0.25rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #555;
  }
`;

const Icon = styled.img`
  width: 55px;
  height: 45px;
  object-fit: contain;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
