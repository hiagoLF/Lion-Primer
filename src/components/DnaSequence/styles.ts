import styled from "styled-components";

type DnaSequenceContainerProps = {
   baseSize: number;
   sequenceColor?: string;
};
export const DnaSequenceContainer = styled.div<DnaSequenceContainerProps>`
   display: flex;
   font-size: ${({ baseSize }) => baseSize}px;
   line-height: 1;

   span {
      width: ${({ baseSize }) => baseSize}px;
      background-color: ${({ sequenceColor }) =>
         sequenceColor ? sequenceColor : "yellow"};
      display: flex;
   }
`;
