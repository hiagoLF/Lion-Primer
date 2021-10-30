import React from "react";
import styled from "styled-components";
import { usePredictedPrimers } from "../../../../contexts/PrimersContext";
import Positions from "./Positions";
import Primers from "./Primers";

const PrimersAndPositionsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;

  #primers-and-positons {
    display: flex;
  }

  #indicators {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      margin: 5px 20px;
      background-color: rgba(17, 45, 78, 0.7);
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      font-weight: bold;

      #selected {
        background-color: #206a5d;
      }
    }
  }
`;

const PrimersAndPositions: React.FC = () => {
  const { primerChoosed } = usePredictedPrimers();

  return (
    <PrimersAndPositionsContainer>
      <div id="indicators">
        <span>Selecione um conjunto</span>
        <span>
          Conjunto Selecionado: <span id="selected">{primerChoosed + 1}</span>
        </span>
      </div>
      <div id="primers-and-positons">
        <Primers />
        <Positions />
      </div>
    </PrimersAndPositionsContainer>
  );
};

export default PrimersAndPositions;
