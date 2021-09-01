import styled from "styled-components";

export type SinglePrimersDescriptionBoxContainerProps = {
  primerSense: "foward" | "reverse";
};

export const SinglePrimersDescriptionBoxContainer = styled.div<SinglePrimersDescriptionBoxContainerProps>`
  width: 95%;
  height: 86px;
  background-color: ${({ primerSense }) =>
    primerSense === "foward" ? "#1B7233" : "#206A5D"};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 13px;
  font-weight: bold;

  .low-opacity {
    opacity: 0.6;
  }

  #sense-and-sequence {
    display: flex;
    margin: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  #left-descriptions {
    display: flex;
    
    
    .description-column-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      margin-right: 15px;

      .single-desciption {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
