import styled from "styled-components";

export const ChooseFileContainer = styled.div`
   width: 305px;
   height: 272px;
   display: flex;
   flex-direction: column;
   margin-top: 27px;

   #drag-and-drop {
      width: 100%;
      background-color: #dbe2ef;
      display: flex;
      flex: 1;
      border: 2px dashed rgba(17, 45, 78, 0.7);
      border-radius: 5px;
      position: relative;

      span {
         color: #000;
         opacity: 0.5;
         font-size: 18px;
         font-weight: bold;
      }

      #dropped-zone {
         display: flex;
         flex-direction: column;
         background-color: #5493;
         position: absolute;
         top: 10px;
         left: 10px;
         right: 10px;
         bottom: 10px;
         border-radius: 5px;

         #cancel-icon {
            top: 10px;
            right: 10px;
            opacity: 0.7;
            position: absolute;
            cursor: pointer;
         }

         #archive-icon {
            height: 50px;
            opacity: 0.8;
         }
         span {
            margin-top: 10px;
            opacity: 0.8;
            font-size: 20px;
         }
      }

      #drop-over-zone {
         display: flex;
         flex-direction: column;
         background-color: rgba(16, 147, 55, 0.5);
         position: absolute;
         top: 10px;
         left: 10px;
         right: 10px;
         bottom: 10px;
         border-radius: 5px;

         img {
            height: 40px;
            opacity: 0.8;
            margin-bottom: 10px;
         }

         span {
            opacity: 0.9;
            font-size: 20px;
         }
      }
   }
`;

type ChooseFileFromPCProps = {
   isLowOpacity: boolean;
};

export const ChooseFileFromPC = styled.div<ChooseFileFromPCProps>`
   opacity: ${({ isLowOpacity }) => (isLowOpacity ? 0.3 : 1)};
   width: 100%;
   display: flex;
   flex-direction: column;

   label {
      margin-top: 10px;
      height: 28px;
      width: 100%;
      display: flex;
      background-color: #112d4e;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;
      border: 2px solid #112d4e;
      cursor: pointer;
   }

   #select-file {
      display: none;
   }
`;
