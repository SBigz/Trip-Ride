import styled from "styled-components";

const Container = styled.div`
  font-family: "Roxborough", sans-serif;
  display: flex;
  position: relative;
  height: 20vh;
  color: #fff;
  border: 2px solid sandybrown;
  border-top: 1px solid sandybrown;
  border-bottom: 1px solid sandybrown;

  align-items: flex-start;
  justify-content: center;

  @media (max-width: 425px) {
    height: 100vh;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/footer.webp");
  background-size: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

const Title = styled.h3`
  font-size: 3vw;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 5px;

  @media (max-width: 425px) {
    font-size: 6vw;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5vw;
  margin: 0 20px 10px;
  text-decoration: none;

  @media (max-width: 425px) {
    font-size: 4vw;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    margin-left: 23px;
  }

  @media (min-width: 2560px) {
    margin-left: 25px;
  }
`;

const Link = styled.a`
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PhoneIcon = styled.div`
  margin-right: 22px;

  @media (max-width: 425px) {
    margin-right: 22px;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PhoneNumber = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -35px;
  margin-right: 230px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    margin: 0;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin: auto;
    margin-top: -20px;
    margin-left: 167px;
  }

  @media (min-width: 1024px) {
    width: 90px;
    height: 90px;
    margin: auto;
    margin-top: -33px;
    margin-left: 254px;
  }

  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;
    margin: auto;
    margin-top: -50px;
    margin-left: 395px;
  }

  @media (min-width: 2560px) {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top: -75px;
    margin-left: 740px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin: 0 30px;

  @media (max-width: 425px) {
    margin: 0;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -90%);
  }

  @media (min-width: 1024px) {
    margin-top: -10px;
  }

  @media (min-width: 1440px) {
    margin-top: -22.5px;
    margin-right: 24px;
  }

  @media (min-width: 2560px) {
    margin-right: 50px;
  }
`;

const SocialIcons = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1440px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 2560px) {
    width: 90px;
    height: 90px;
  }
`;

const CreditWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 2560px) {
    font-size: 1.2vw;
  }
`;

const MadeWithLove = styled.span`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

export default function ContactInfo() {
  return (
    <Container>
      <BackgroundImage />
      <ContentWrapper>
        <Title>Contact</Title>
        <ContactWrapper>
          <ContactInfos>
            <PhoneContainer>
              <PhoneIcon>📞</PhoneIcon>
              <PhoneNumber href="tel:1234567890">+33 1 23 45 67 89</PhoneNumber>
            </PhoneContainer>
            <div>
              💌 <Link href="mailto:jerome.2@me.com">Jerome.2@me.com</Link>
            </div>
          </ContactInfos>
          <Logo src="/logo.png" alt="Logo" />
          <SocialLinks>
            <a href="https://www.facebook.com">
              <SocialIcons src="/icons/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
              <SocialIcons src="/icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com">
              <SocialIcons src="/icons/youtube.png" alt="Youtube" />
            </a>
          </SocialLinks>
        </ContactWrapper>
        <CreditWrapper>
          <MadeWithLove>Made with ❤️ by CodeSacha</MadeWithLove>
        </CreditWrapper>
      </ContentWrapper>
    </Container>
  );
}
