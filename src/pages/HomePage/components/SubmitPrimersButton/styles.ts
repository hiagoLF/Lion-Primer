import styled from "styled-components";

type SubmitPrimersButtonContainerProps = {
   available: boolean;
};

export const SubmitPrimersButtonContainer = styled.button<SubmitPrimersButtonContainerProps>`
   height: 44px;
   width: 760px;

   margin-top: 35px;
   border: none;
   outline: none;
   background-color: #3f72af;
   border-radius: 5px;

   opacity: ${({ available }) => (available ? 1 : 0.4)};
   cursor: ${({ available }) => (available ? "pointer" : "not-allowed")};

   span {
      font-weight: bold;
      font-size: 24px;
      color: #fff;
   }
`;
