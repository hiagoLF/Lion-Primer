import getSecondaryStructures from "../secondaryStructures/getSecondaryStructures";
import { getCGcontentAtFiveLastNucleotides } from "./getCGcontentAtFiveLastNucleotides";
import { getGcPercentage } from "./getGcPercentage";
import { getMeltingTemperature } from "./getMeltingTemperature";
import { getSubsequentDinucleotidesAmount } from "./getSubsequentDinucleotidesAmount";
import { getSubsequentRepeatedBases } from "./getSubsequentRepeatedBases";

export function getFragmentInformations(
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

  // const secondaryStructures = getSecondaryStructures(fragment);
  // console.log("secondaryStructures >>> ", secondaryStructures);

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
