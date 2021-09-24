import React, { useEffect, useState } from "react";
import { usePredictedPrimers } from "../../contexts/PrimersContext";
import PrimersLocations from "./components/PrimerLocations";
import SinglePrimersDescriptionBox from "./components/SinglePrimersDescriptionBox";

import { PrimersDescriptionsContainer } from "./styles";

const PrimersDescriptions: React.FC = () => {
  const { predictedPrimers, primerChoosed } = usePredictedPrimers();
  const [hitEffect, setHitEffect] = useState(false);

  useEffect(() => {
    setHitEffect(true)
    setTimeout(() => {
      setHitEffect(false)
    }, 200)
  }, [primerChoosed]);

  return (
    <PrimersDescriptionsContainer
      hitEffect={hitEffect}
    >
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
