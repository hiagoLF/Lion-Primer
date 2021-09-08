import { PrimersType } from "../../../types/primers";

export function getTheBestReversePrimer(
  primerWithoutReverse: PrimersType,
  primerToCompareList: PrimersType[],
  geneLengh: number
): PrimersType | undefined {
  let theBestPrimer: PrimersType = primerToCompareList[0];
  let reversePrimerChoosed = false;
  const minimumDistanceBettweenPrimers = geneLengh / 4;

  primerToCompareList.forEach((primerToCompare) => {
    if (
      havePrimersTheMinimumDistance(
        minimumDistanceBettweenPrimers,
        primerWithoutReverse,
        primerToCompare
      )
    ) {
      if (
        diferenceBettwenPrimersMeltingTemperatures(
          theBestPrimer,
          primerWithoutReverse
        ) >
        diferenceBettwenPrimersMeltingTemperatures(
          primerToCompare,
          primerWithoutReverse
        )
      ) {
        theBestPrimer = primerToCompare;
        reversePrimerChoosed = true;
      }
    }
  });

  if (!reversePrimerChoosed) {
    return undefined;
  }
  return theBestPrimer;
}

function diferenceBettwenPrimersMeltingTemperatures(
  primerOne: PrimersType,
  primerTwo: PrimersType
) {
  let dif = 0;

  if (primerOne.meltingTemperature > primerTwo.meltingTemperature) {
    dif = primerOne.meltingTemperature - primerTwo.meltingTemperature;
  } else {
    dif = primerTwo.meltingTemperature - primerOne.meltingTemperature;
  }

  console.log(
    "primerOne >>> ",
    primerOne.meltingTemperature,
    " - ",
    "primerTwo >>> ",
    primerTwo.meltingTemperature,
    " - ",
    "Result >>>",
    dif
  );

  return dif;
}

function havePrimersTheMinimumDistance(
  minimumDistanceBettweenPrimers: number,
  primerOne: PrimersType,
  primerTwo: PrimersType
) {
  if (
    minimumDistanceBettweenPrimers <
    primerTwo.positions.initialNucleotidePosition -
      primerOne.positions.initialNucleotidePosition
  ) {
    return true;
  } else {
    return false;
  }
}
