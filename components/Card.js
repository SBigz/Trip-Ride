import styled from "styled-components";

const CardContainer = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 1.3vw;
  font-weight: 600;
  color: white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 1.5;
  position: absolute;
  top: 50px;
  ${(props) =>
    props.textposition === "right" ? "left: 50px;" : "right: 50px;"}
  width: 35vw;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 20px;
  border: 2px solid black;
  ${(props) =>
    props.textposition === "right"
      ? `
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px 4px 8px rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.3s ease-in-out;
          &:hover {
            box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2), -6px 6px 12px rgba(255, 255, 255, 0.3);
          }
        `
      : `
          box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.3s ease-in-out;
          &:hover {
            box-shadow: 6px -6px 12px rgba(0, 0, 0, 0.2), 6px 6px 12px rgba(255, 255, 255, 0.3);
          }
        `}
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(4px);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(39, 39, 39, 0.5));
  color: #fff;
  border-radius: 17px;
  width: 100%;
  height: 100%;
`;

const Badge = styled.img`
  width: 90px;
  height: 90px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 0;
  ${(props) => (props.textposition === "right" ? "left: 0;" : "right: 0;")}
  margin-top: -45px;
  ${(props) =>
    props.textposition === "right"
      ? "margin-left: -40px;"
      : "margin-right: -40px;"}
`;

const Title = styled.h1`
  font-size: 1.9vw;
`;

const List = styled.ul`
  font-size: 1.1vw;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export default function Card({
  cardTitle,
  activities,
  price,
  textposition,
  badgePath,
}) {
  activities = activities.map((activity, index) => {
    if (index === activities.length - 1) {
      return <li key={index}>{activity}</li>;
    } else {
      return (
        <li key={index}>
          {activity}
          <br />
          ----
        </li>
      );
    }
  });

  return (
    <CardContainer textposition={textposition}>
      <CardContent>
        <Badge src={badgePath} alt="medal" textposition={textposition} />
        <Title>{cardTitle}</Title>
        <List textposition={textposition}>{activities}</List>
        <h3>{price}</h3>
      </CardContent>
    </CardContainer>
  );
}
