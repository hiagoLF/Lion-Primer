import React from "react";
import DnaSequence from "../DnaSequence";
import PrimerSequence from "./components/PrimerSequence";

import { DnaAndPrimersContainer } from "./styles";

const fowardSequence =
   "ATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGATATCGATCGAT";

const fowardPrimers = [
   {
      sequence: "ATCGATCGAT",
      positions: {
         initialPosition: 90,
         finalPosition: 100,
      },
   },
   {
      sequence: "ATCGATCGAT",
      positions: {
         initialPosition: 80,
         finalPosition: 90,
      },
   },
   {
      sequence: "ATCGATCGAT",
      positions: {
         initialPosition: 70,
         finalPosition: 80,
      },
   },
];

const DnaAndPrimers: React.FC = () => {
   return (
      <DnaAndPrimersContainer>
         <div id="foward-dna-and-primers">
            {fowardPrimers.map((primerConfigurations) => (
               <PrimerSequence
                  primerConfigurations={primerConfigurations}
                  baseDnaLenght={650 / fowardSequence.length}
                  primerSense="reverse"
               />
            ))}
            <DnaSequence sense="foward" sequence={fowardSequence} />
         </div>

         <div id="reverse-dna-and-primerss">
            <DnaSequence sense="reverse" sequence={fowardSequence} />
            {fowardPrimers.map((primerConfigurations) => (
               <PrimerSequence
                  primerConfigurations={primerConfigurations}
                  baseDnaLenght={650 / fowardSequence.length}
                  primerSense="foward"
                  initialDnaSequenceLength={fowardSequence.length}
               />
            ))}
         </div>
      </DnaAndPrimersContainer>
   );
};

export default DnaAndPrimers;
