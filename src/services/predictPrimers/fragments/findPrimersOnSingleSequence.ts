import { getFragmentsFrom } from ".";
import { getTheBestPrimers } from "../filter/getTheBestPrimers";
import { removeRepeatedPrimers } from "../filter/removeRepeatedPrimers";

export default function findPrimersOnSingleSequence(sequence: string) {
  const primersNotFiltered = getFragmentsFrom(sequence);
  const theBestPrimers = getTheBestPrimers(primersNotFiltered);
  const uniquePrimers = removeRepeatedPrimers(theBestPrimers);

  return uniquePrimers;
}
