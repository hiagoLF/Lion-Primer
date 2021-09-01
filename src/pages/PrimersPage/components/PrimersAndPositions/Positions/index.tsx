import React from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import DnaAndPrimers from "../../../../../components/DnaAndPrimers";
import PrimersDescriptions from "../../../../../components/PrimersDescriptions";

import { PositionsContainer } from "./styles";

const Positions: React.FC = () => {
   return (
      <PositionsContainer>
         <PrimersDescriptions />
      </PositionsContainer>
   );
};

export default Positions;
