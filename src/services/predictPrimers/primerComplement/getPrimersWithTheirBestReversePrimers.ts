import { PrimersType } from "../../../types/primers";
import { getTheBestReversePrimer } from "./getTheBestReversePrimer";

export function getPrimersWithTheirBestReversePrimers(
  primers: PrimersType[],
  geneLengh: number
) {
  const primersMatched = primers.map((primer, primerIndex, primerList) => {
    const matchedPrimer = getTheBestReversePrimer(
      primer,
      primerList,
      geneLengh
    );

    if (!matchedPrimer) {
      return undefined;
    }

    const primerWithReverseSequence = primer;
    primerWithReverseSequence.reversePrimer = matchedPrimer;

    return primerWithReverseSequence;
  });

  const primersMatchedCleaned: PrimersType[] = [];
  primersMatched.forEach((primer, index) => {
    if (primer) {
      primersMatchedCleaned.push(primer);
    }
  });

  return primersMatchedCleaned;
}