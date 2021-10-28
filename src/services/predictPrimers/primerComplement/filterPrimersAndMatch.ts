import { CombinedPrimersType, PrimersType } from "../../../types/primers";
import { getTheBestPrimers } from "../filter/getTheBestPrimers";
import { matchPrimers } from "./matchPrimers";

export default function filterPrimersAndMatch(
  fowardPrimers: PrimersType[],
  reversePrimers: PrimersType[]
): CombinedPrimersType[] {
  let combinedPrimers: CombinedPrimersType[] = [];
  let combinationAttempts = 0;

  while (combinedPrimers.length === 0 && combinationAttempts <= 13) {
    console.log(combinationAttempts);

    combinationAttempts = combinationAttempts + 1;

    const theBestReversePrimers = getTheBestPrimers(
      reversePrimers,
      combinationAttempts
    );
    const theBestFowardPrimer = getTheBestPrimers(
      fowardPrimers,
      combinationAttempts
    );

    combinedPrimers = matchPrimers(theBestFowardPrimer, theBestReversePrimers);
    console.log(combinedPrimers);
  }

  return combinedPrimers;
}
