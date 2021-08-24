import React from "react";

import { SinglePrimerContainer } from "./styles";

type SinglePrimerProps = {
   sense: "foward" | "reverse";
   sequence: string;
};

const SinglePrimer: React.FC<SinglePrimerProps> = ({ sense, sequence }) => {
   return (
      <SinglePrimerContainer primerSense={sense}>
         <span id="sense">{sense === "foward" ? "Senso" : "Anti-Senso"}</span>
         <span id="sequence">{sequence}</span>
      </SinglePrimerContainer>
   );
};

export default SinglePrimer;
