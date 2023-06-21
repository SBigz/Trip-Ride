import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const NewsletterContainer = styled.form`
  display: flex;
  flex-direction: raw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 0px 20px 0px 20px;
  border-radius: 20px;
  border: 2px solid black;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  left: 20px;
  width: calc(100% - 40px);
  height: 80px;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  align-self: center;
  font-family: "Roxborough", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: lightgray;

  &::before {
    content: "💌";
    margin-right: 40px;
    margin-left: 20px;
    position: relative;
    top: 2px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: raw;
  align-items: center;
`;

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      body: JSON.stringify({
        email,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <NewsletterContainer onSubmit={handleSubmit}>
      <Title>Newsletter & Offres Spéciales</Title>
      <InputContainer>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          alt
        />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          alt
        />
        <Button type="submit">S'inscrire</Button>
      </InputContainer>
    </NewsletterContainer>
  );
}
