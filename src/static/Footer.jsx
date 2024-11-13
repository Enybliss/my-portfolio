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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: none; /* Adjust background color for visibility */
  color: #222;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem; /* Add gap between the text and social links */

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
    gap: 0.5rem; /* Reduce gap on smaller screens */
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem; /* Space between text and icons */

  @media (max-width: 768px) {
    gap: 1rem; /* Reduce gap between icons on smaller screens */
  }
`;

const SocialLink = styled.a`
  color: #222;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
