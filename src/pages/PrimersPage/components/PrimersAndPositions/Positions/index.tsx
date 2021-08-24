import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DnaAndPrimers from "../../../../../components/DnaAndPrimers";

import { PositionsContainer } from "./styles";

const Positions: React.FC = () => {
   return (
      <PositionsContainer>
         <TransformWrapper maxScale={30}>
            <TransformComponent>
               <DnaAndPrimers />
            </TransformComponent>
         </TransformWrapper>
      </PositionsContainer>
   );
};

export default Positions;
