import { PrimersType } from "../../../types/primers";

export function getTheBestPrimers(primersToFilter: PrimersType[]) {
  let betterPrimers = primersToFilter.filter((primer) => {
    if (!(primer.meltingTemperature >= 52 && primer.meltingTemperature <= 58)) {
      return false;
    }

    // if (primer.cgContentAtFiveLastNucleotides >= 3) {
    //   return false;
    // }
    // console.log('-')

    if (primer.subsequentDinucleotidesAmount >= 5) {
      return false;
    }
    if (primer.subsequentRepeatedBases >= 5) {
      return false;
    }
    console.log('-')
    if (
      !(primer.gcPercentage >= 30 && primer.gcPercentage <= 70)
    ) {
      return false;
    }


    for (
      let deltaGIndex = 0;
      deltaGIndex < primer.dimersDeltaGValues.length;
      deltaGIndex++
    ) {
      if (primer.dimersDeltaGValues[deltaGIndex] <= -3) {
        return false;
      }
    }

    return true;
  });
  return betterPrimers;
}
