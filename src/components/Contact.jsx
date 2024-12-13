import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'your_service_id',  // Replace with your EmailJS service ID
        'template_9n9fuyz', // Replace with your EmailJS template ID
        templateParams,
        'your_user_id'      // Replace with your EmailJS user ID (found in EmailJS dashboard)
      ); // Simulated API call
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
  <Title>Contact Me</Title>
  <ContentWrapper>
    <Section>
      <p>
        <span>📞</span> 07030274482 <br />
        08113892767
      </p>
      <WhatsAppLink
        href="https://wa.me/2347030274482?text=Hello,%20I%20would%20like%20to%20get%20in%20touch!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppLogo
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        <span>Chat with me on WhatsApp</span>
      </WhatsAppLink>
    </Section>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></Textarea>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </Form>
  </ContentWrapper>
  {success === true && <SuccessMessage>Message sent successfully!</SuccessMessage>}
  {success === false && <ErrorMessage>Failed to send the message. Please try again.</ErrorMessage>}
 </ContactSection>

);
};

export default Contact;


const ContactSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 200px;
padding: 4rem 2rem;
color: #333;



@media (max-width: 768px) {
    padding: 3rem 1rem;
  }


`

const Title = styled.h2`
 font-size: 2rem;
  margin-top: 5rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

const ContentWrapper = styled.div`
display: flex;
justify-content: space-around; 
align-items: flex-start;
width: 100%;

@media (max-width: 768px) {
    flex-direction: column; /* Stacks the form and contact details on smaller screens */
    align-items: center;
  }

`

const Section = styled.div`
 flex: 1;
 text-align: left;
 p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 1rem; /* Adds space between the paragraph and WhatsApp link */
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Form = styled.form`
flex: 1;
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 400px;

@media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }

`

const WhatsAppLink = styled.a`
 display: flex;
 align-items: center;
 font-size: 1rem;
 text-decoration: none;
 margin-top: 1rem;
 transition: color 0.3s ease;

 &:hover {
    color: green;
  }

  span {
    margin-left: 0.5rem;
  }
`

const WhatsAppLogo = styled.img`
width: 24px;
height: 24px;
margin-right: 10px;
`

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`

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

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`

const Button = styled.button`
 padding: 0.75rem;
 font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
 `



  

