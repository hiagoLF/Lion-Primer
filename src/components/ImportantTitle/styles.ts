import styled from "styled-components";

type ImportantTitleContainerProps = {
   width?: number;
};

export const ImportantTitleContainer = styled.div<ImportantTitleContainerProps>`
   display: flex;
   flex-direction: column;
   color: #112d4e;
   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: #112d4e;
   padding-bottom: 10px;
   font-size: 11px;
   width: ${({ width }) => (width ? width : 753)}px;
`;
