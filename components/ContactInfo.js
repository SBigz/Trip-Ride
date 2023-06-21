import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  display: flex;
  font-family: "Roxborough", sans-serif;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  border: 2px solid sandybrown;
  border-top: 1px solid sandybrown;
  border-bottom: 1px solid sandybrown;
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
  font-size: 2rem;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 5px;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  margin: 0 20px 10px;
  text-decoration: none;
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
`;

const SocialLinks = styled.div`
  display: flex;
  margin: 0 30px;
`;

const SocialIcons = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const CreditWrapper = styled.div`
  display: flex;
  justify-content: center;
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
              🕌{" "}
              <Link
                href="https://www.google.com/maps/search/?api=1&query=3+boulevard+des+Tapis+Berbères,+666+Meknes"
                target="_blank"
                rel="noopener noreferrer"
              >
                3 boulevard des Tapis Berbères, 666 Meknes
              </Link>
            </div>
            <div>
              💌{" "}
              <Link href="mailto:jerome.2@me.com">
              Jerome.2@me.com
              </Link>
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
