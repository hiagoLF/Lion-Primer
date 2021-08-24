import React from "react";
import styled from "styled-components";
import SubmitBlastButton from "./components/SubmitBlastButton";

const BottomButtonsContainer = styled.div`
   width: 920px;
   display: flex;
   justify-content: flex-start;
   margin-top: 50px;
`;

const BottomButtons: React.FC = () => {
   return (
      <BottomButtonsContainer>
         <SubmitBlastButton />
      </BottomButtonsContainer>
   );
};

export default BottomButtons;
