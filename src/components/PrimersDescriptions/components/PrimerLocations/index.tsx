import React, { WheelEventHandler } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  PrimersLocationsProps,
  PrimersPositionsType,
} from "../../../../types/primers";

import { PrimersLocationsContainer } from "./styles";

type defineNucleotideColorHighlightType = (
  nucleotideIndex: number,
  fowardPrimerPositions: PrimersPositionsType,
  reversePrimerPositions: PrimersPositionsType
) => "foward" | "reverse" | undefined;

const defineNucleotideColorHighlight: defineNucleotideColorHighlightType = (
  nucleotideIndex,
  fowardPrimerPositions,
  reversePrimerPositions
) => {
  if (
    nucleotideIndex + 1 >= fowardPrimerPositions.initialNucleotidePosition &&
    nucleotideIndex + 1 <= fowardPrimerPositions.finalNucleotidePosition
  ) {
    return "foward";
  }
  if (
    nucleotideIndex + 1 >= reversePrimerPositions.initialNucleotidePosition &&
    nucleotideIndex + 1 <= reversePrimerPositions.finalNucleotidePosition
  ) {
    return "reverse";
  }
  return undefined;
};

const PrimersLocations: React.FC<PrimersLocationsProps> = ({
  geneSequence,
  fowardPrimerPositions,
  reversePrimerPositions,
}) => {
  const [geneSequenceArray, setGeneSequenceArray] = useState<
    string[] | undefined
  >(undefined);
  const [amplifiedFragmentsSize, setAmplifiedFragmentsSize] = useState(0);
  const sequenceAndLocationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const geneSequenceToArray = geneSequence?.split("");
    setGeneSequenceArray(geneSequenceToArray);
  }, [geneSequence]);

  useEffect(() => {
    const lastPosition = reversePrimerPositions?.finalNucleotidePosition || 0;
    const initialPosition = fowardPrimerPositions?.initialNucleotidePosition || 0;

    const fragmentsSize = lastPosition - initialPosition + 1;
    setAmplifiedFragmentsSize(fragmentsSize);
  }, [fowardPrimerPositions, reversePrimerPositions]);

  const handleSequenceAndLocationsBoxWheel: WheelEventHandler = (event) => {
    if (!sequenceAndLocationsRef.current) return;
    sequenceAndLocationsRef.current.scrollLeft += event.deltaY;
  };

  return (
    <PrimersLocationsContainer onWheel={handleSequenceAndLocationsBoxWheel}>
      <div id="title-container">
        <span className="low-opacity">Localizações</span>
        <div id="fragments-size-container">
          <span className="low-opacity">
            Tamanho dos Fragmentos Amplificados:{" "}
          </span>
          <span>{amplifiedFragmentsSize} nt</span>
        </div>
      </div>
      <div id="sequence-and-locations" ref={sequenceAndLocationsRef}>
        {geneSequenceArray?.map((nucleotide, nucleotideIndex) => (
          <span
            key={nucleotideIndex}
            className={defineNucleotideColorHighlight(
              nucleotideIndex,
              fowardPrimerPositions || {
                finalNucleotidePosition: 0,
                initialNucleotidePosition: 0,
              },
              reversePrimerPositions || {
                finalNucleotidePosition: 0,
                initialNucleotidePosition: 0,
              }
            )}
          >
            {nucleotide}
          </span>
        ))}
      </div>
    </PrimersLocationsContainer>
  );
};

export default PrimersLocations;
