import React from "react";
import { usePredictedPrimers } from "../../../../../contexts/PrimersContext";
import SinglePrimer from "./components/SinglePrimer";

import { PrimersContainer } from "./styles";

const Primers: React.FC = () => {
  const { predictedPrimers, setPrimerChoosed, primerChoosed } = usePredictedPrimers();

  const handlePrimerClick = (primerIndex: number) => {
    setPrimerChoosed(primerIndex);
  };

  return (
    <PrimersContainer>
      {predictedPrimers?.primers.map((primer, primerIndex) => (
        <SinglePrimer
          choosed={primerChoosed === primerIndex}
          primers={primer}
          key={primerIndex}
          index={primerIndex}
          onClick={handlePrimerClick}
        />
      ))}
    </PrimersContainer>
  );
};

export default Primers;
