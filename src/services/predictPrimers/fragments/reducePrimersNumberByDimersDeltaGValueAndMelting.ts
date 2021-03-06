import { CombinedPrimersType } from "../../../types/primers";

type PrimersDeltaGAmountType = {
  deltaGAmount: number;
  primersCombinationAmount: number;
};

export default function reducePrimersNumberByDimersDeltaGValueAndMelting(
  combinedPrimers: CombinedPrimersType[]
) {
  const combinedPrimersSortedByDeltaG = combinedPrimers.sort(
    (primersA, primersB) => {
      const primersADeltaGAmount =
        (primersA.fowardPrimer.dimersDeltaGValues?.length || 0) +
        (primersA.reversePrimer.dimersDeltaGValues?.length || 0);
      const primersBDeltaGAmount =
        (primersB.fowardPrimer.dimersDeltaGValues?.length || 0) +
        (primersB.reversePrimer.dimersDeltaGValues?.length || 0);
      if (primersADeltaGAmount <= primersBDeltaGAmount) {
        return 1;
      } else {
        return -1;
      }
    }
  );

  const combinedPrimersSortedByMelting = combinedPrimersSortedByDeltaG.sort(
    (primersA, primersB) => {
      if (
        primersA.fowardPrimer.meltingTemperature <=
        primersB.fowardPrimer.meltingTemperature
      ) {
        return 1;
      } else {
        return -1;
      }
    }
  );

  const reducedPrimers = combinedPrimersSortedByMelting.slice(0, 4);
  return reducedPrimers;
}
