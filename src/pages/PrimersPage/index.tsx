import React from "react";
import { useLocation } from "react-router-dom";
import GeneName from "./components/GeneName";

import { PrimersPageContainer } from "./styles";

const PrimersPage: React.FC = () => {
   const location = useLocation();

   console.log(location.state);

   return (
      <PrimersPageContainer>
         <GeneName />
         {/* <PrimersAndPositions /> */}
         {/* <SubmitBlastButton /> */}
      </PrimersPageContainer>
   );
};

export default PrimersPage;
