import { PrimersType } from "../../../types/primers";

export function getTheBestPrimers(primersToFilter: PrimersType[]) {
  let betterPrimers = primersToFilter.filter((primer) => {
    if (primer.cgContentAtFiveLastNucleotides >= 3) {
      return false;
    }
    if (primer.subsequentDinucleotidesAmount >= 4) {
      return false;
    }
    if (primer.subsequentRepeatedBases >= 4) {
      return false;
    }
    if (
      !(primer.gcPercentage > 40 && primer.cgContentAtFiveLastNucleotides < 60)
    ) {
      return false;
    }
    if (!(primer.meltingTemperature > 52 && primer.meltingTemperature < 58)) {
      return false;
    }
    return true;
  });
  return betterPrimers;
}
