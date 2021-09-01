import React from "react";
import { usePredictedPrimers } from "../../../../../contexts/PrimersContext";
import SinglePrimer from "./components/SinglePrimer";

import { PrimersContainer } from "./styles";

const Primers: React.FC = () => {
  const { predictedPrimers } = usePredictedPrimers();

  return (
    <PrimersContainer>
      {predictedPrimers?.primers.map(({ sequence }) => (
        <SinglePrimer sense={"foward"} sequence={sequence} />
      ))}
    </PrimersContainer>
  );
};

export default Primers;
