import {
  PrimersType,
  RemovePrimersWithMoreThanOneDnaTargetType,
} from "../../types/primers";

function predictPrimersFromFastaGene(fataGene: string) {
  const geneName = getGeneNameFromFasta(fataGene);
  const geneSequence = getGeneSequenceFromFasta(fataGene);
  const primersNotFiltered = getFragmentsFrom(geneSequence);
  const theBestPrimers = getTheBestPrimers(primersNotFiltered);
  const uniquePrimers = removeRepeatedPrimers(theBestPrimers);
  const primers = removePrimersWithMoreThanOneDnaTarget(
    uniquePrimers,
    geneSequence
  );

  return {
    geneName,
    geneSequence,
    primers,
  };
}

function getGeneNameFromFasta(fataGene: string) {
  const geneHeader = fataGene.split("\n")[0];
  const geneName = geneHeader.replace(">", "").trim();
  return geneName;
}

function getGeneSequenceFromFasta(fataGene: string) {
  const fastaLines = fataGene.split("\n");
  fastaLines.shift();
  const geneSequence = fastaLines.join("");
  return geneSequence;
}

// function getDnaComplementarSequenceFrom(geneSequence: string) {
//   const geneConvertedToArray = geneSequence.split("");
//   const complementarGeneArray = geneConvertedToArray.map((nitrogenBase) => {
//     switch (nitrogenBase) {
//       case "A":
//         return "T";
//       case "T":
//         return "A";
//       case "G":
//         return "C";
//       case "C":
//         return "G";
//     }
//   });
//   complementarGeneArray.reverse();
//   const complementaryGeneString = complementarGeneArray.join("");
//   return complementaryGeneString;
// }

function getFragmentsFrom(geneSequence: string) {
  const geneSequenceToArray = geneSequence.split("");
  const fragmentsCollection = [];

  for (
    let nitrogenBaseIndex = 0;
    nitrogenBaseIndex <= geneSequence.length - 22;
    nitrogenBaseIndex++
  ) {
    const fragments = getFragmentsStartedOnIndex(
      nitrogenBaseIndex,
      geneSequenceToArray
    );
    fragmentsCollection.push(...fragments);
  }

  return fragmentsCollection;
}

function getFragmentsStartedOnIndex(
  initialBaseIndex: number,
  geneSequenceArray: string[]
) {
  const fragmentsCollection = [];

  for (
    let finalIndex = initialBaseIndex + 17;
    finalIndex <= initialBaseIndex + 22;
    finalIndex++
  ) {
    const fragmentInformations = getFragmentInformations(
      initialBaseIndex,
      finalIndex,
      geneSequenceArray
    );
    fragmentsCollection.push(fragmentInformations);
  }

  return fragmentsCollection;
}

function getFragmentInformations(
  initialBaseIndex: number,
  finalIndex: number,
  geneSequenceArray: string[]
) {
  const fragment = geneSequenceArray.slice(initialBaseIndex, finalIndex);
  const cgContentAtFiveLastNucleotides =
    getCGcontentAtFiveLastNucleotides(fragment);
  const subsequentDinucleotidesAmount =
    getSubsequentDinucleotidesAmount(fragment);
  const subsequentRepeatedBases = getSubsequentRepeatedBases(fragment);
  const gcPercentage = getGcPercentage(fragment);
  const meltingTemperature = getMeltingTemperature(fragment);

  const fragmentInformations = {
    sequence: fragment.join(""),
    positions: {
      initialNucleotidePosition: initialBaseIndex + 1,
      finalNucleotidePosition: finalIndex,
    },
    cgContentAtFiveLastNucleotides,
    subsequentDinucleotidesAmount,
    subsequentRepeatedBases,
    gcPercentage,
    meltingTemperature,
  };

  return fragmentInformations;
}

function getCGcontentAtFiveLastNucleotides(fragment: string[]) {
  let cgAmount = 0;
  for (
    let nitrogenBaseIndex = fragment.length - 5;
    nitrogenBaseIndex <= fragment.length;
    nitrogenBaseIndex++
  ) {
    if (
      fragment[nitrogenBaseIndex] === "C" ||
      fragment[nitrogenBaseIndex] === "G"
    ) {
      cgAmount++;
    }
  }
  return cgAmount;
}

function getSubsequentDinucleotidesAmount(fragment: string[]) {
  let subsequentDinucleotideAmount = 0;
  let dinucleotideIndex = 0;
  let foundNucleotide = false;

  while (dinucleotideIndex < fragment.length - 3) {
    const currentDinucleotide = [
      fragment[dinucleotideIndex],
      fragment[dinucleotideIndex + 1],
    ].join("");
    const nextDinucleotide = [
      fragment[dinucleotideIndex + 2],
      fragment[dinucleotideIndex + 3],
    ].join("");
    if (currentDinucleotide === nextDinucleotide) {
      subsequentDinucleotideAmount++;
      dinucleotideIndex = dinucleotideIndex + 2;
      foundNucleotide = true;
    } else {
      if (foundNucleotide) {
        foundNucleotide = false;
        subsequentDinucleotideAmount++;
      }
      dinucleotideIndex++;
    }
  }
  return subsequentDinucleotideAmount;
}

function getSubsequentRepeatedBases(fragment: string[]) {
  let subsequentRepeatedBases = 0;
  let subsequentRepeatedBaseFound = false;

  fragment.forEach((currentBase, currentBaseIndex) => {
    if (currentBase === fragment[currentBaseIndex + 1]) {
      subsequentRepeatedBases++;
      subsequentRepeatedBaseFound = true;
    } else {
      if (subsequentRepeatedBaseFound) {
        subsequentRepeatedBases++;
        subsequentRepeatedBaseFound = false;
      }
    }
  });

  return subsequentRepeatedBases;
}

function getGcPercentage(fragment: string[]) {
  const gAmountNumber = getAmountNumberOfNitrogenBaseInFragment("G", fragment);
  const cAmountNumber = getAmountNumberOfNitrogenBaseInFragment("C", fragment);
  const gcAmountNumber = gAmountNumber + cAmountNumber;
  const gcPercentage = (gcAmountNumber / fragment.length) * 100;
  return gcPercentage;
}

function getAmountNumberOfNitrogenBaseInFragment(
  nitrogenBase: string,
  fragment: string[]
) {
  let amountNumberOfNitrogenBase = 0;
  fragment.forEach((fragmentNitrogenBase) => {
    if (fragmentNitrogenBase === nitrogenBase) {
      amountNumberOfNitrogenBase++;
    }
  });
  return amountNumberOfNitrogenBase;
}

function getMeltingTemperature(fragment: string[]) {
  const cContentNumber = getAmountNumberOfNitrogenBaseInFragment("C", fragment);
  const gContentNumber = getAmountNumberOfNitrogenBaseInFragment("G", fragment);
  const aContentNumber = getAmountNumberOfNitrogenBaseInFragment("A", fragment);
  const tContentNumber = getAmountNumberOfNitrogenBaseInFragment("T", fragment);
  const meltingTemperature =
    4 * (gContentNumber + cContentNumber) +
    2 * (aContentNumber + tContentNumber);
  return meltingTemperature;
}

function getTheBestPrimers(primersToFilter: PrimersType[]) {
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
      !(primer.gcPercentage > 40 || primer.cgContentAtFiveLastNucleotides < 60)
    ) {
      return false;
    }
    if (!(primer.meltingTemperature > 52 || primer.meltingTemperature < 58)) {
      return false;
    }
    return true;
  });
  return betterPrimers;
}

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

export const removePrimersWithMoreThanOneDnaTarget: RemovePrimersWithMoreThanOneDnaTargetType =
  (primers, geneSequence) => {
    const singleTargetPrimers = primers.filter(({ sequence }) => {
      const primerRepeatsNumber = getOccurrencesNumberOfElementInText(
        sequence,
        geneSequence
      );
      if (primerRepeatsNumber > 1) {
        return false;
      }

      const backToFrontPrimerSequence = turnTextStringBackToFront(sequence);
      const backToFrontPrimerRepeatsNumber =
        getOccurrencesNumberOfElementInText(
          backToFrontPrimerSequence,
          geneSequence
        );
      if (backToFrontPrimerRepeatsNumber > 1) {
        return false;
      }

      if (primerRepeatsNumber > 0 || backToFrontPrimerRepeatsNumber > 0) {
        return false;
      }

      return true;
    });

    return singleTargetPrimers;
  };

function getOccurrencesNumberOfElementInText(element: string, text: string) {
  const elementRegexString = new RegExp(element, "g");
  const elementOccurrencesNumber = text.match(elementRegexString)?.length || 0;
  return elementOccurrencesNumber;
}

function turnTextStringBackToFront(textString: string) {
  const backToFrontTextString = textString.split("").reverse().join("");
  return backToFrontTextString;
}

export default predictPrimersFromFastaGene;
