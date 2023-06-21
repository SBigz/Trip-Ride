import styled from "styled-components";
import Card from "./Card";
import CoverText from "./CoverText";
import CheckoutContainer from "./CheckoutContainer";

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => `/${props.imagepath}`});
  background-size: cover;
  background-position: center;
`;

const Cover = ({
  subtitle,
  cardTitle,
  activities,
  price,
  imagepath,
  textposition,
  product,
  badgePath
}) => {
  return (
    <CoverContainer imagepath={imagepath}>
      <Card
        textposition={textposition}
        activities={activities}
        cardTitle={cardTitle}
        price={price}
        badgePath={badgePath}
      />
      <CheckoutContainer textposition={textposition} product={product} />
      <CoverText textposition={textposition} subtitle={subtitle} />
    </CoverContainer>
  );
};

export default Cover;
