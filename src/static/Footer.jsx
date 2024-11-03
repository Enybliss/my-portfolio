import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterText>Designed and built by Blessing Udebuani</FooterText>
        <FooterText>© 2024 Blessing Udebuani. All rights reserved.</FooterText>

        <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/blessing-udebuani" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/enybliss/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://github.com/Enybliss" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://x.com/enybliss2" target="_blank" aria-label="X">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="mailto:blessingeneudebuani@gmail.com" aria-label="Email">
              <FaEnvelope />
            </SocialLink>
        </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: #202020;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
