import React from "react";
import { PrimersType } from "../../../../../../../types/primers";

import { SinglePrimerContainer } from "./styles";

type SinglePrimerProps = {
  choosed: boolean
  primer: PrimersType;
  index: number
  onClick: (primerIndex: number) => void
};

const SinglePrimer: React.FC<SinglePrimerProps> = ({
  choosed,
  primer,
  index,
  onClick
}) => {
  return (
    <SinglePrimerContainer choosed={choosed} onClick={() => onClick(index)}>
      <span id="sense">Conjunto {index + 1}</span>
      <span id="sequence">F: {primer.sequence}</span>
      <span id="sequence">R: {primer.reversePrimer?.sequence}</span>
    </SinglePrimerContainer>
  );
};

export default SinglePrimer;
