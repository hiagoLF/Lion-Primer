import { getFragmentsFrom } from ".";
import { removeRepeatedPrimers } from "../filter/removeRepeatedPrimers";

export default function findPrimersOnSingleSequence(sequence: string) {
  const primersNotFiltered = getFragmentsFrom(sequence);
  const uniquePrimers = removeRepeatedPrimers(primersNotFiltered);

  return uniquePrimers;
}
