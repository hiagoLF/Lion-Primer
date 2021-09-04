import { PrimersType } from "../../../types/primers";

export function removeRepeatedPrimers(theBestPrimers: PrimersType[]) {
  const uniquePrimers = theBestPrimers.filter((primer, index, primersList) => {
    let isUnique = true;
    primersList.forEach((primerToCompare, primerToCompareIndex) => {
      if (
        primerToCompareIndex !== index &&
        primerToCompare.sequence === primer.sequence
      ) {
        isUnique = false;
      }
    });
    return isUnique;
  });

  return uniquePrimers;
}
