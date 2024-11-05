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
    <SkillsContainer>
      <SkillSection>
        <Title>Using Now</Title>
        <SkillsGrid>
          <SkillCard>
            <Icon src={ICONS.html5} alt="HTML5" />
            <span>HTML5</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.css3} alt="CSS3" />
            <span>CSS3</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.sass} alt="SASS" />
            <span>SASS</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.javascript} alt="JavaScript" />
            <span>JavaScript</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.react} alt="React" />
            <span>React</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.bootstrap} alt="Bootstrap" />
            <span>Bootstrap</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.git} alt="Git" />
            <span>Git</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.figma} alt="Figma" />
            <span>Figma</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.vscode} alt="VSCode" />
            <span>VSCode</span>
          </SkillCard>
          <SkillCard>
            <Icon src={ICONS.github} alt="GitHub" />
            <span>GitHub</span>
          </SkillCard>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  color: #333;
  background: none;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const LearningGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: #333;

  span {
    margin-top: 0.5rem;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
