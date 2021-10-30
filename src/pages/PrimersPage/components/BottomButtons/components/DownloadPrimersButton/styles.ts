import styled from "styled-components";

export const DownloadPrimersButtonContainer = styled.button`
   background-color: #3f72af;
   height: 41px;
   border-radius: 5px;
   display: flex;
   color: #f9f7f7;
   font-size: 18px;
   font-weight: bold;
   justify-content: space-between;
   cursor: pointer;
   border: none;
   transition: 0.3s;

   &:hover {
      opacity: 0.8;
   }

   span {
      margin-left: 20px;
   }

   img {
      margin: 0 10px;
   }
`;
