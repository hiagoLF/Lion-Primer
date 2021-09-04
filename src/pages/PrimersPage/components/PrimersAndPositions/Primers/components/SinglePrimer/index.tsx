import React from "react";
import { PrimersType } from "../../../../../../../types/primers";

import { SinglePrimerContainer } from "./styles";

type SinglePrimerProps = {
  sense: "foward" | "reverse";
  primer: PrimersType;
  index: number
  onClick: (primerIndex: number) => void
};

const SinglePrimer: React.FC<SinglePrimerProps> = ({
  sense,
  primer,
  index,
  onClick
}) => {
  return (
    <SinglePrimerContainer primerSense={sense} onClick={() => onClick(index)}>
      <span id="sense">Conjunto {index}</span>
      <span id="sequence">F: {primer.sequence}</span>
      <span id="sequence">R: {primer.reversePrimer?.sequence}</span>
    </SinglePrimerContainer>
  );
};

export default SinglePrimer;
