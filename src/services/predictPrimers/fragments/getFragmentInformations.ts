import getDimersDeltaGValues from "../secondaryStructures/getDimersDeltaGValues";
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

  const dimersDeltaGValues = getDimersDeltaGValues(fragment);

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
    dimersDeltaGValues,
  };

  return fragmentInformations;
}
