import { PrimersType } from "../../../types/primers";

export function getTheBestPrimers(
  primersToFilter: PrimersType[],
  attempt: number
) {
  let betterPrimers = primersToFilter.filter((primer) => {
    if (primer.cgContentAtFiveLastNucleotides >= 3) {
      return false;
    }

    const isMeltingTemperatureSatisfied = verifIfIsMeltingTemperatureSatisfied(
      primer.meltingTemperature,
      attempt
    );
    if (!isMeltingTemperatureSatisfied) {
      return false;
    }

    const isSubsequentDinucleotidesAmountSatisfied =
      verifIfIssubsequentDinucleotidesAmountSatisfied(
        primer.subsequentDinucleotidesAmount,
        attempt
      );
    if (!isSubsequentDinucleotidesAmountSatisfied) {
      return false;
    }

    const isSubsequentRepeatedBasesSatisfied =
      verifIfIsSubsequentRepeatedBasesSatisfied(
        primer.subsequentRepeatedBases,
        attempt
      );
    if (!isSubsequentRepeatedBasesSatisfied) {
      return false;
    }

    const isGcPercentageSatisfied = verifIfIsGcPercentageSatisfied(
      primer.gcPercentage,
      attempt
    );
    if (!isGcPercentageSatisfied) {
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

function verifIfIssubsequentDinucleotidesAmountSatisfied(
  subsequentDinucleotidesAmount: number,
  attempt: number
) {
  // Para tentativa 10 e 11
  if (attempt === 15 && subsequentDinucleotidesAmount <= 8) {
    return true;
  }

  // Para tentativa 10 e 11
  if (attempt === 14 && subsequentDinucleotidesAmount <= 7) {
    return true;
  }

  // Para tentativa 10 e 11
  if (
    (attempt === 10 || attempt === 11 || attempt === 12 || attempt === 13) &&
    subsequentDinucleotidesAmount <= 6
  ) {
    return true;
  }

  // Para tentativa 5 e 9
  if ((attempt === 5 || attempt === 9) && subsequentDinucleotidesAmount <= 5) {
    return true;
  }

  // Para tentativa 1 e outras
  if (subsequentDinucleotidesAmount <= 4) {
    return true;
  }
  return false;
}

function verifIfIsSubsequentRepeatedBasesSatisfied(
  subsequentRepeatedBases: number,
  attempt: number
) {
  // Para tentativa 11
  if (attempt === 15 && subsequentRepeatedBases <= 8) {
    return true;
  }

  // Para tentativa 11
  if (attempt === 14 && subsequentRepeatedBases <= 7) {
    return true;
  }

  // Para tentativa 11
  if (
    (attempt === 11 || attempt === 12 || attempt === 13) &&
    subsequentRepeatedBases <= 6
  ) {
    return true;
  }

  // Para tentativa 5, 8, 9, 10
  if (
    (attempt === 5 || attempt === 8 || attempt === 9 || attempt === 10) &&
    subsequentRepeatedBases <= 5
  ) {
    return true;
  }

  // Para tentativa 1 e outras
  if (subsequentRepeatedBases <= 4) {
    return true;
  }
  return false;
}

function verifIfIsMeltingTemperatureSatisfied(
  meltingTemperature: number,
  attempt: number
) {

  // Para a tentativa 2, 7, 8, 9, 10 e 11
  if (
    (
      attempt === 9 ||
      attempt === 10 ||
      attempt === 11 ||
      attempt === 12 ||
      attempt === 14 ||
      attempt === 15) &&
    meltingTemperature >= 51 &&
    meltingTemperature <= 59
  ) {
    return true;
  }
  // Para a tentativa 1 e todas as outras tentativas
  if (meltingTemperature >= 52 && meltingTemperature <= 58) {
    return true;
  }
  return false;
}

function verifIfIsGcPercentageSatisfied(gcPercentage: number, attempt: number) {
  // Para a tentativa 13
  if (
    (attempt === 13 || attempt === 14 || attempt === 15) &&
    gcPercentage >= 20 &&
    gcPercentage <= 80
  ) {
    return true;
  }

  // Para a tentativa 12
  if (attempt === 12 && gcPercentage >= 25 && gcPercentage <= 75) {
    return true;
  }

  // Para a tentativa 4, 7, 8, 9, 10 e 11
  if (
    (attempt === 4 ||
      attempt === 7 ||
      attempt === 8 ||
      attempt === 9 ||
      attempt === 10 ||
      attempt === 11) &&
    gcPercentage >= 30 &&
    gcPercentage <= 70
  ) {
    return true;
  }

  // Para a tentativa 3
  if (attempt === 3 && gcPercentage >= 35 && gcPercentage <= 65) {
    return true;
  }

  // Para a tentativa 1 e outras
  if (gcPercentage >= 40 && gcPercentage <= 60) {
    return true;
  }
  return false;
}
