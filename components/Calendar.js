import { useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
registerLocale("fr-FR", fr);

const DatePickerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 80px;
`;

const DatePickerElement = styled(DatePicker)`
  border: none;
  cursor: pointer;
  outline: none;
  font-family: "Roxborough", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
  width: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;

// Ce composant représente l'input personnalisé
const CustomInputStart = forwardRef(({ value, onClick }, ref) => (
  <button onClick={onClick} ref={ref} className="custom-date-picker-input">
    {value || "Début du Trip"}
  </button>
));

const CustomInputEnd = forwardRef(({ value, onClick }, ref) => (
  <button onClick={onClick} ref={ref} className="custom-date-picker-input">
    {value || "Fin du Trip"}
  </button>
));

export default function Calendar({ onDatesChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const unavailableWeeks = ["2023-07-01", "2023-07-08"]; // Exemple de semaines non disponibles

  const handleStartDateSelect = (date) => {
    if (unavailableWeeks.includes(date.toISOString().split("T")[0])) {
      return;
    }

    setStartDate(date);
    const newEndDate = new Date(date);
    newEndDate.setDate(date.getDate() + 6); // Ajoute 6 jours à la date de début
    setEndDate(newEndDate);

    if (typeof onDatesChange === "function") {
      onDatesChange(date, newEndDate);
    }
  };

  const getHighlightedDates = () => {
    const highlightedDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      highlightedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return highlightedDates;
  };

  return (
    <DatePickerContainer>
      <DatePickerElement
        selected={startDate}
        onChange={handleStartDateSelect}
        shouldCloseOnSelect={false}
        minDate={new Date()}
        maxDate={new Date("2023-12-31")}
        placeholderText="Début du trip"
        customInput={<CustomInputStart />}
        dateFormat="dd/MM/yyyy"
        locale="fr-FR"
        showWeekNumbers
        highlightDates={getHighlightedDates()}
        filterDate={(date) =>
          !unavailableWeeks.includes(date.toISOString().split("T")[0])
        } // Permet de désactiver les dates non disponibles
      />
      <DatePickerElement
        selected={endDate}
        shouldCloseOnSelect={false}
        minDate={startDate}
        maxDate={new Date("2023-12-31")}
        placeholderText="Fin du trip"
        customInput={<CustomInputEnd />}
        dateFormat="dd/MM/yyyy"
        locale="fr-FR"
        showWeekNumbers
        highlightDates={getHighlightedDates()}
        filterDate={(date) => {
          if (!startDate || !endDate) {
            return !unavailableWeeks.includes(date.toISOString().split("T")[0]);
          }
          return (
            date >= startDate &&
            date <= endDate &&
            !unavailableWeeks.includes(date.toISOString().split("T")[0])
          );
        }} // Permet de désactiver les dates non disponibles
      />
    </DatePickerContainer>
  );
}
