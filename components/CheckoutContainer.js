import { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import Checkout from "../components/Checkout";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  width: 47%;
  top: 50px;
  ${(props) =>
    props.textposition === "right" ? "right: 50px;" : "left: 50px;"}
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 20px;
  border: 2px solid black;

  @media (max-width: 425px) {
    height: 50px;
    top: 5px;
  }

  @media (max-width: 1024px) {
    position: relative;
    width: 90%;
    left: 5%;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
`;

export default function CheckoutContainer({ textposition, product }) {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleDates = (startDate, endDate) => {
    setSelectedWeek({ startDate, endDate });
  };

  return (
    <Container textposition={textposition}>
      <CalendarContainer>
        <Icon src="/icons/calendar.png" />
        <Calendar onDatesChange={handleDates} />
      </CalendarContainer>
      <Checkout product={product} selectedWeek={selectedWeek} />
    </Container>
  );
}
