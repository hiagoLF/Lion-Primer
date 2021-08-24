import styled from "styled-components";

type PrimerSequenceContainerProps = {
   leftPosition?: number;
};
export const PrimerSequenceContainer = styled.div<PrimerSequenceContainerProps>`
   width: 100%;
   padding: 5px 0;
   position: relative;
   margin: 10px 0;

   #sequence {
      position: absolute;
      left: ${({ leftPosition }) => leftPosition}px;
   }
`;
