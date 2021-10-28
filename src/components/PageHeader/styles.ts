import styled from "styled-components";

export const PageHeaderContainer = styled.div`
   width: 100%;
   height: 59px;
   background-color: #3f72af;
   display: flex;

   #header-content {
      width: 753px;
      display: flex;
      justify-content: space-between;

      #logo-container {
         display: flex;
         color: #f9f7f7;
         cursor: pointer;
      }

      #header-buttons {
         color: #f9f7f7;
         font-size: 14px;
         font-weight: bold;

         a {
            margin-left: 20px;
            text-decoration: none;
            color: #f9f7f7;
         }
      }
   }
`;
