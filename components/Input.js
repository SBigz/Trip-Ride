import styled from "styled-components";

const StyledInput = styled.input`
  color: #fff;
  font-family: "Roxborough", sans-serif;
  font-size: 1.5vw;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  margin-right: 2vw;
  max-width: 190px;
  transition: 0.8s;

  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  &:focus {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.56);
  }
`;

export default function Input({ name, placeholder }) {
  return <StyledInput type="text" name={name} placeholder={placeholder} />;
}
