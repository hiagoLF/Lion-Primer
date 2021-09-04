import { PrimersType } from "../../../types/primers";

export function getTheBestReversePrimer(
  primer: PrimersType,
  primerList: PrimersType[],
  geneLengh: number
) {
  let theBestPrimer: PrimersType | null = null;
  const minimumDistanceBettweenPrimers = Math.round(geneLengh / 4);

  primerList.forEach((primerToCompare) => {
    if (
      minimumDistanceBettweenPrimers <
      Math.round(
        primerToCompare.positions.initialNucleotidePosition -
          primer.positions.initialNucleotidePosition
      )
    ) {
      if (theBestPrimer) {
        if (
          Math.round(
            theBestPrimer.meltingTemperature - primer.meltingTemperature
          ) >
          Math.round(
            primerToCompare.meltingTemperature - primer.meltingTemperature
          )
        ) {
          theBestPrimer = primerToCompare;
        }
      } else {
        theBestPrimer = primerToCompare;
      }
    }
  });

  return theBestPrimer;
}
