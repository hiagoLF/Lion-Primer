import styled from "styled-components";

type SinglePrimerContainerProps = {
  primerSense: "foward" | "reverse";
};

export const SinglePrimerContainer = styled.div<SinglePrimerContainerProps>`
  width: 202px;
  margin: 3px 0 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ primerSense }) =>
    primerSense === "foward" ? "#1b7233" : "#206A5D"};
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 0;

  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  }

  span {
    color: #fff;
    margin-left: 4px;
  }

  #sense {
    opacity: 0.6;
  }
`;
