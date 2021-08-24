import React from "react";

import { SubmitBlastButtonContainer } from "./styles";

import arrowRightIcon from "../../../../../../assets/icons/arrow-right.svg";

const SubmitBlastButton: React.FC = () => {
   return (
      <SubmitBlastButtonContainer>
         <span>Fazer Blast</span>
         <div id="arrows">
            <img src={arrowRightIcon} alt="Blast" />
            <img src={arrowRightIcon} alt="Blast" />
         </div>
      </SubmitBlastButtonContainer>
   );
};

export default SubmitBlastButton;
