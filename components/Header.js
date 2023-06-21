import styled from "styled-components";

// Créer un composant Container stylisé
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(4px);
  padding: 0px 20px 0px 20px;
  border-radius: 20px;
  border: 2px solid black;
  width: calc(100% - 40px);
  height: 70px;
  position: absolute;
  top: 5px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

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
  width: 55px;
  height: 55px;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

// Creer un composant Title stylisé
const Title = styled.p`
  font-family: "Roxborough", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 12px;
  color: white;
`;

// Créer un composant ButtonContainer stylisé
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// Créer un composant Button stylisé
const StyledButton = styled.button`
  font-family: "Roxborough", sans-serif;
  font-size: 1.5rem;
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
`;

// Creer un composant PhoneContainer stylisé
const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

// Creer un composant PhoneIcon stylisé
const PhoneIcon = styled.span`
  font-size: 1.5rem;
  position: relative;
  top: 3px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

// Créer un composant PhoneNumber stylisé
const PhoneNumber = styled.a`
  font-family: "Roxborough", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  margin-left: 10px;

  ${PhoneContainer}:hover & {
    text-decoration: underline;
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
