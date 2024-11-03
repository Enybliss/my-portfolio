import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Contact Me</Title>

      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required></Textarea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: none;
  color: #fff;

  /* Adjust padding on smaller screens */
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: black;

  /* Decrease title font size on smaller screens */
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  /* Reduce max-width for smaller screens */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333;
  color: #fff;

  /* Adjust padding and font size for smaller screens */
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333;
  color: #fff;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: #aaa;
  }

  /* Adjust padding and font size for smaller screens */
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #FF6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF4500;
  }

  /* Adjust button padding and font size for smaller screens */
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;
