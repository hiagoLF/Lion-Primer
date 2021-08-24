import React from "react";
import styled from "styled-components";
import Positions from "./Positions";
import Primers from "./Primers";

const PrimersAndPositionsContainer = styled.div`
   display: flex;
   margin-top: 40px;
`;

const PrimersAndPositions: React.FC = () => {
   return (
      <PrimersAndPositionsContainer>
         <Primers />
         <Positions />
      </PrimersAndPositionsContainer>
   );
};

export default PrimersAndPositions;
