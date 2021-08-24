import React from "react";
import SinglePrimer from "./components/SinglePrimer";

import { PrimersContainer } from "./styles";

const primers = [
   {
      sense: "foward",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
   {
      sense: "foward",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
   {
      sense: "foward",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
   {
      sense: "reverse",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
   {
      sense: "reverse",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
   {
      sense: "reverse",
      sequence: "AGCTGACGATCGATCTAGCTAGC",
   },
];

const Primers: React.FC = () => {
   return (
      <PrimersContainer>
         {primers.map(({ sense, sequence }) => (
            <SinglePrimer sense={sense as any} sequence={sequence} />
         ))}
      </PrimersContainer>
   );
};

export default Primers;
