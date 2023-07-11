import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const NewsletterContainer = styled.form`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 0px 10px 0px 10px;
  border-radius: 20px;
  border: 2px solid black;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  left: 20px;
  width: calc(100% - 40px);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  height: 5vh;

  @media (min-width: 768px) {
    height: 6vh;
  }
  
  @media (min-width: 1024px) {
    height: 8vh;
  }

  @media (min-width: 1440px) {
    height: 10vh;
  }

  @media (min-width: 2560px) {
    border-radius: 30px;
    border: 4px solid black;
  }
`;

const FullTitle = styled.h2`
  align-self: center;
  font-family: "Roxborough", sans-serif;
  font-size: 2.3vw;
  font-weight: 700;
  color: lightgray;
  display: none;

  &::before {
    content: "💌";
    margin-right: 1vw;
    margin-left: 1vw;
    position: relative;
    top: 2px;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;

const EmojiTitle = styled.h2`
  font-family: "Roxborough", sans-serif;
  color: lightgray;
  align-self: center;
  font-size: 2.5vw;
  font-weight: 700;
  margin-bottom: 10px;

  &::before {
    content: "💌";
    margin-right: 1vw;
    position: relative;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
 
  @media (min-width: 768px) {
    margin-right: 1vw;
  }
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
      <FullTitle>Offres spéciales & Newsletter</FullTitle>
      <EmojiTitle>Offres & Newsletter</EmojiTitle>
      <InputContainer>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="  Nom"
          alt
        />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="  E-mail"
          alt
        />
        <Button type="submit">S'inscrire</Button>
      </InputContainer>
    </NewsletterContainer>
  );
}
