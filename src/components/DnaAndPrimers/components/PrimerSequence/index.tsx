import React, { useEffect, useState } from "react";
import DnaSequence from "../../../DnaSequence";

import { PrimerSequenceContainer } from "./styles";

type PrimerSequenceProps = {
   primerConfigurations: {
      sequence: string;
      positions: {
         initialPosition: number;
         finalPosition: number;
      };
   };
   baseDnaLenght?: number;
   fontSize?: number;
   primerSense?: "foward" | "reverse";
   initialDnaSequenceLength?: number;
};

const PrimerSequence: React.FC<PrimerSequenceProps> = ({
   primerConfigurations,
   baseDnaLenght,
   fontSize,
   primerSense,
   initialDnaSequenceLength,
}) => {
   const [leftPositioin, setLeftPosition] = useState(0);

   useEffect(() => {
      if (!baseDnaLenght) return;
      if (primerSense === "reverse") {
         setLeftPosition(
            primerConfigurations.positions.initialPosition * baseDnaLenght
         );
         return;
      }
      if (!initialDnaSequenceLength) return;
      let position =
         initialDnaSequenceLength * baseDnaLenght -
         primerConfigurations.positions.initialPosition * baseDnaLenght -
         primerConfigurations.sequence.length * baseDnaLenght;
      setLeftPosition(position);
   }, []);

   // baseDnaLenght &&
   //    (primerSense === "reverse"
   //       ? baseDnaLenght *
   //         primerConfigurations.positions.initialPosition
   //       : initialDnaSequenceLength &&
   //         initialDnaSequenceLength -
   //            (primerConfigurations.positions.initialPosition -
   //               primerConfigurations.sequence.length));

   return (
      <PrimerSequenceContainer leftPosition={leftPositioin}>
         <span id="sequence">
            {
               <DnaSequence
                  sequence={primerConfigurations.sequence}
                  baseSize={baseDnaLenght}
                  color="red"
                  sense={primerSense}
               />
            }
         </span>
      </PrimerSequenceContainer>
   );
};

export default PrimerSequence;
