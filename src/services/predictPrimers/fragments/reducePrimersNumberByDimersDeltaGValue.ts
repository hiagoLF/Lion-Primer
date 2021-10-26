import { CombinedPrimersType } from "../../../types/primers";

type PrimersDeltaGAmountType = {
  deltaGAmount: number;
  primersCombinationAmount: number;
};

export default function reducePrimersNumberByDimersDeltaGValue(
  combinedPrimers: CombinedPrimersType[]
) {
  const combinedPrimersSorted = combinedPrimers.sort((primersA, primersB) => {
    const primersADeltaGAmount =
      primersA.fowardPrimer.dimersDeltaGValues.length +
      primersA.reversePrimer.dimersDeltaGValues.length;
    const primersBDeltaGAmount =
      primersB.fowardPrimer.dimersDeltaGValues.length +
      primersB.reversePrimer.dimersDeltaGValues.length;
    if (primersADeltaGAmount >= primersBDeltaGAmount) {
      return 1;
    } else {
      return -1;
    }
  });

  const reducedPrimers = combinedPrimers.slice(0,4)
  return reducedPrimers
}
