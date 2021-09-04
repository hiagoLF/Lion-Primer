import React from "react";
import { usePredictedPrimers } from "../../contexts/PrimersContext";
import { PrimersPositionsType, PrimersType } from "../../types/primers";
import PrimersLocations from "./components/PrimerLocations";
import SinglePrimersDescriptionBox from "./components/SinglePrimersDescriptionBox";

import { PrimersDescriptionsContainer } from "./styles";

const geneSequence =
  "AGCTGACGATCGATCTAGCTAGCTCATCGATCGTACGTAGCCTAGCTAGCTAGCTAGCTGACTGTAGCTGATCGCAGTAGCTGACGATCGATCTAGCTAGCTCATCGATCGTACGTAGCCTAGCTAGCTAGCTAGCTGACTGTAGCTGATCGCAGT";

const primersDescription: PrimersType = {
  sequence: "AGCTGACGATCGATCTAGCTAGC",
  cgContentAtFiveLastNucleotides: 5,
  gcPercentage: 52,
  meltingTemperature: 53,
  positions: {
    initialNucleotidePosition: 50,
    finalNucleotidePosition: 69,
  },
  subsequentDinucleotidesAmount: 0,
  subsequentRepeatedBases: 3,
};

const fowardPrimerPositions: PrimersPositionsType = {
  initialNucleotidePosition: 4,
  finalNucleotidePosition: 20,
};

const reversePrimerPositions: PrimersPositionsType = {
  initialNucleotidePosition: 25,
  finalNucleotidePosition: 37,
};

const PrimersDescriptions: React.FC = () => {
  const { predictedPrimers, primerChoosed } = usePredictedPrimers();

  return (
    <PrimersDescriptionsContainer>
      <SinglePrimersDescriptionBox
        primerSense={"foward"}
        primersDescription={predictedPrimers?.primers[primerChoosed]}
      />

      <SinglePrimersDescriptionBox
        primerSense={"reverse"}
        primersDescription={
          predictedPrimers?.primers[primerChoosed].reversePrimer
        }
      />

      <PrimersLocations
        geneSequence={predictedPrimers?.geneSequence}
        fowardPrimerPositions={
          predictedPrimers?.primers[primerChoosed].positions
        }
        reversePrimerPositions={
          predictedPrimers?.primers[primerChoosed].reversePrimer?.positions
        }
      />
    </PrimersDescriptionsContainer>
  );
};

export default PrimersDescriptions;
