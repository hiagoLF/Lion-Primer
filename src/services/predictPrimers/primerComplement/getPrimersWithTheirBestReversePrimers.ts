import { PrimersType } from "../../../types/primers";
import { getTheBestReversePrimer } from "./getTheBestReversePrimer";

export function getPrimersWithTheirBestReversePrimers(
  primers: PrimersType[],
  geneLengh: number
) {
  const primersWithReversePrimers = primers.map(
    (
      primerWithoutReverse,
      primerWithoutReverseIndex,
      primerWithoutReverseList
    ) => {
      const matchedPrimer = getTheBestReversePrimer(
        primerWithoutReverse,
        primerWithoutReverseList,
        geneLengh
      );

      if (!matchedPrimer) {
        return undefined;
      }

      const primerWithReverseSequence = { ...primerWithoutReverse };
      primerWithReverseSequence.reversePrimer = matchedPrimer;

      return primerWithReverseSequence;
    }
  );

  const primersMatchedCleaned: PrimersType[] = [];
  primersWithReversePrimers.forEach((primer) => {
    if (primer) {
      primersMatchedCleaned.push(primer);
    }
  });

  return primersMatchedCleaned;
}
