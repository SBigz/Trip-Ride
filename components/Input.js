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
  transition: 0.8s;

  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  &:focus {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.56);
  }

  
  @media (max-width: 768px) {
    width: 90px;
    font-size: 2.5vw;
    border-radius: 20px;
  }
  
  @media (max-width: 425px) {
    width: 40px;
    height: 20px;
    font-size: 2.5vw;
  }
  
  @media (max-width: 320px) {
    width: 30px;
    height: 17px;
  }

  @media (min-width: 2560px) {
    width: 350px;
  }
  `;

export default function Input({ name, placeholder }) {
  return <StyledInput type="text" name={name} placeholder={placeholder} />;
}
