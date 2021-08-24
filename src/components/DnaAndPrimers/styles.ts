import styled from "styled-components";

type DnaAndPrimersContainerProps = {};

export const DnaAndPrimersContainer = styled.div<DnaAndPrimersContainerProps>`
   height: 284px;
   width: 693px;
   display: flex;
   flex-direction: column;
   font-weight: bold;

   #foward-dna-and-primers {
      margin-bottom: 5px;
   }

   #reverse-dna-and-primers {
      margin-top: 5px;
   }
`;
