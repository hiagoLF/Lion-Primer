import { PrimersType } from "../../../types/primers";
import findPrimersOnSingleSequence from "./findPrimersOnSingleSequence";

type FindPrimersReturn = {
  reversePrimers: PrimersType[];
  fowardPrimers: PrimersType[];
};

type FindPrimers = (
  complementaryGeneSequence: string,
  geneSequence: string
) => FindPrimersReturn;

const findPrimers: FindPrimers = (complementaryGeneSequence, geneSequence) => {

  const reversePrimers = findPrimersOnSingleSequence(
    complementaryGeneSequence
  );
  const fowardPrimers = findPrimersOnSingleSequence(geneSequence);

  return { reversePrimers, fowardPrimers};
};

export default findPrimers;
