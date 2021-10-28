import { PrimersType } from "../../../types/primers";

export const matchPrimers = (
  fowardPrimers: PrimersType[],
  reversePrimers: PrimersType[]
) => {
  const matchedPrimersAndUndefineds = fowardPrimers.map((fowardPrimer) => {
    var bestReversePrimer: PrimersType | undefined = undefined;

    for (let index = 0; index < reversePrimers.length; index++) {
      const distanceBetweenFAndR = getDistanceBettween(
        fowardPrimer,
        reversePrimers[index]
      );
      if (!distanceBetweenFAndR) {
        continue;
      }
      const isFAndRClosingMeltingTemperature = verifyClosingMeltingTemperature(
        fowardPrimer.meltingTemperature,
        reversePrimers[index].meltingTemperature
      );
      if (!isFAndRClosingMeltingTemperature) {
        continue;
      }
      if (distanceBetweenFAndR > 700) {
        continue;
      }
      if (distanceBetweenFAndR < 70) {
        continue;
      }
      if (!bestReversePrimer) {
        bestReversePrimer = reversePrimers[index];
        continue;
      }
      const distanceBetweenFAndBestR = getDistanceBettween(
        fowardPrimer,
        bestReversePrimer
      ) as number;
      if (distanceBetweenFAndBestR > 500 && distanceBetweenFAndR < 500) {
        bestReversePrimer = reversePrimers[index];
        continue;
      }
      const distanceBetweenRAndBestR = getDistanceBettween(
        reversePrimers[index],
        bestReversePrimer
      );
      if (
        distanceBetweenFAndBestR > 500 &&
        distanceBetweenFAndR > 500 &&
        distanceBetweenRAndBestR
      ) {
        bestReversePrimer = reversePrimers[index];
        continue;
      }
      if (
        distanceBetweenFAndBestR < 500 &&
        distanceBetweenFAndR < 500 &&
        !distanceBetweenRAndBestR
      ) {
        bestReversePrimer = reversePrimers[index];
        continue;
      }
    }

    if (!bestReversePrimer) {
      return undefined;
    }
    return {
      fowardPrimer,
      reversePrimer: bestReversePrimer,
    };
  });

  const matchedPrimers = matchedPrimersAndUndefineds.filter((pp) => pp);

  return matchedPrimers as {
    fowardPrimer: PrimersType;
    reversePrimer: PrimersType;
  }[];
};

function getDistanceBettween(first: PrimersType, second: PrimersType) {
  const distance =
    second.positions.finalNucleotidePosition -
    first.positions.initialNucleotidePosition;
  if (distance < 0) {
    return undefined;
  }
  return distance;
}

function verifyClosingMeltingTemperature(
  meltingOne: number,
  meltingTwo: number
) {
  if (meltingOne > meltingTwo) {
    if (meltingOne - meltingTwo <= 1) {
      return true;
    }
  } else {
    if (meltingTwo - meltingOne <= 1) {
      return true;
    }
  }
  return false;
}
