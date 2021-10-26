import React from "react";
import { CombinedPrimersType, PrimersType } from "../../../../../../../types/primers";

import { SinglePrimerContainer } from "./styles";

type SinglePrimerProps = {
  choosed: boolean
  primers: CombinedPrimersType;
  index: number
  onClick: (primerIndex: number) => void
};

const SinglePrimer: React.FC<SinglePrimerProps> = ({
  choosed,
  primers,
  index,
  onClick
}) => {
  return (
    <SinglePrimerContainer choosed={choosed} onClick={() => onClick(index)}>
      <span id="sense">Conjunto {index + 1}</span>
      <span id="sequence">F: {primers.fowardPrimer.sequence}</span>
      <span id="sequence">R: {primers.reversePrimer.sequence}</span>
    </SinglePrimerContainer>
  );
};

export default SinglePrimer;
