import React from "react";
import styled from "styled-components";

const TechStack = () => {
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
    <SkillsContainer id="techstack">
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
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem; 

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 0.4rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const LearningGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;

  span {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #555;
  }
`;

const Icon = styled.img`
  width: 55px;
  height: 45px;
  object-fit: contain;


  @media (max-width: 768px) {
    width: 40px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 30px;
  }
`;
