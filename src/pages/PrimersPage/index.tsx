import React from "react";
import { useLocation } from "react-router-dom";
import BottomButtons from "./components/BottomButtons";
import GeneName from "./components/GeneName";
import PrimersAndPositions from "./components/PrimersAndPositions";

import { PrimersPageContainer } from "./styles";

const PrimersPage: React.FC = () => {
   const location = useLocation();

   console.log(location.state);

   return (
      <PrimersPageContainer>
         <GeneName />
         <PrimersAndPositions />
         <BottomButtons />
      </PrimersPageContainer>
   );
};

export default PrimersPage;
