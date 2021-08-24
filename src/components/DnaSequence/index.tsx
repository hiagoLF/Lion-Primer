import React, { useEffect, useState } from "react";

import { DnaSequenceContainer } from "./styles";

type DnaSequenceProps = {
   sense?: "foward" | "reverse";
   sequence: string;
   baseSize?: number;
   color?: string;
};

const DnaSequence: React.FC<DnaSequenceProps> = ({
   sense,
   sequence,
   baseSize,
   color,
}) => {
   const [fragmentedString, setFragmentedString] = useState<string[]>([]);

   useEffect(() => {
      const arraySequence = sequence.split("");
      if (sense === "reverse") arraySequence.reverse();
      setFragmentedString(arraySequence);
   }, [sequence]);

   return (
      <DnaSequenceContainer
         baseSize={baseSize ? baseSize : 650 / fragmentedString.length}
         sequenceColor={color}
      >
         {sense === "foward" ? "5'" : "3'"}
         {fragmentedString.map((caracter) => (
            <span>{caracter}</span>
         ))}
         <span></span>
         {sense === "reverse" ? "5'" : "3'"}
      </DnaSequenceContainer>
   );
};

export default DnaSequence;
