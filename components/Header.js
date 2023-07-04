import styled from "styled-components";

// Créer un composant Container stylisé
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 2px solid black;
  height: 8vh;
  width: calc(100% - 40px);
  position: absolute;
  top: 5px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    height: 10vh;
    justify-content: space-around;
  }

  @media (min-width: 2560px) {
    border-radius: 30px;
  border: 4px solid black;
`;

// Creer un composant TitleContainer (Title + Logo) stylisé
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
`;

// Creer un composant Logo stylisé
const Logo = styled.img`
  width: 40px; 
  height: 40px;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1440px) {
    width: 60px;
    height: 60px;
    margin-bottom: 2px;
  }

  @media (min-width: 2560px) {
    width: 110px;
    height: 110px;
  }


`;

// Creer un composant Title stylisé
const Title = styled.p`
  font-family: "Roxborough", sans-serif;
  font-size: 8vw;
  font-weight: 700;
  padding-bottom: 12px;
  color: white;

  @media (min-width: 768px) {
    font-size: 6vw;
  }

  @media (min-width: 1024px) {
    font-size: 4vw;
  }

  @media (min-width: 1440px) {
    font-size: 4vw;
  }

  @media (min-width: 2560px) {
    font-size: 4vw;
  }

`;

// Créer un composant ButtonContainer stylisé
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  display: none;

  @media (min-width: 880px) {
    display: block;
  }
`;

// Créer un composant Button stylisé
const StyledButton = styled.button`
  font-family: "Roxborough", sans-serif;
  font-size: 4vw;
  font-weight: 700;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: black;
  }

  @media (min-width: 880px) {
    font-size: 2vw;
  }

  @media (min-width: 1200px) {
    font-size: 2vw;
  }
`;

// Creer un composant PhoneContainer stylisé
const PhoneContainer = styled.div`
  display: none;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: black;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;

// Creer un composant PhoneIcon stylisé
const PhoneIcon = styled.span`
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    top: 3px;
    font-size: 4vw;
  }

  @media (min-width: 1024px) {
    top: 4px;
    font-size: 3vw;
  }

  @media (min-width: 1440px) {
    top: 5px;
    font-size: 2vw;
  }

  @media (min-width: 2560px) {
    top: 6px;
    font-size: 2vw;
  }
`;

// Créer un composant PhoneNumber stylisé
const PhoneNumber = styled.a`
  font-family: "Roxborough", sans-serif;
  font-size: 3vw;
  font-weight: 700;
  color: white;
  text-decoration: none;
  margin-left: 10px;

  ${PhoneContainer}:hover & {
    text-decoration: underline;
  }

  @media (min-width: 880px) {
    font-size: 2vw;
  }

  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
`;

// Utiliser les composants stylisés dans le Header
export default function Header() {
  return (
    <Container>
      <TitleContainer>
        <Logo src="/logo.png" alt="logo" />
        <Title>Trip & Ride</Title>
      </TitleContainer>
      <ButtonContainer>
        <StyledButton>Trips</StyledButton>
        <StyledButton>Le Concept</StyledButton>
        <StyledButton>Réserver</StyledButton>
      </ButtonContainer>
      <PhoneContainer>
        <PhoneIcon>📞</PhoneIcon>
        <PhoneNumber href="tel:1234567890">+33 1 23 45 67 89</PhoneNumber>
      </PhoneContainer>
    </Container>
  );
}
