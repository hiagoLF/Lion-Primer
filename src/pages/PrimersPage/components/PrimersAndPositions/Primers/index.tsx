import React from "react";
import { usePredictedPrimers } from "../../../../../contexts/PrimersContext";
import SinglePrimer from "./components/SinglePrimer";

import { PrimersContainer } from "./styles";

const Primers: React.FC = () => {
  const { predictedPrimers, setPrimerChoosed } = usePredictedPrimers();

  const handlePrimerClick = (primerIndex: number) => {
    setPrimerChoosed(primerIndex);
  };

  return (
    <PrimersContainer>
      {predictedPrimers?.primers.map((primer, primerIndex) => (
        <SinglePrimer
          sense={"foward"}
          primer={primer}
          key={primerIndex}
          index={primerIndex}
          onClick={handlePrimerClick}
        />
      ))}
    </PrimersContainer>
  );
};

export default Primers;
