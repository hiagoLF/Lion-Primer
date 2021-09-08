import { getTheBestPrimers } from "./filter/getTheBestPrimers";
import { removePrimersWithMoreThanOneDnaTarget } from "./filter/removePrimersWithMoreThanOneDnaTarget";
import { removeRepeatedPrimers } from "./filter/removeRepeatedPrimers";
import { getGeneNameFromFasta } from "./format/getGeneNameFromFasta";
import { getGeneSequenceFromFasta } from "./format/getGeneSequenceFromFasta";
import { getFragmentsFrom } from "./fragments";
import { getPrimersWithTheirBestReversePrimers } from "./primerComplement/getPrimersWithTheirBestReversePrimers";

function predictPrimersFromFastaGene(fataGene: string) {
  const geneName = getGeneNameFromFasta(fataGene);
  const geneSequence = getGeneSequenceFromFasta(fataGene);
  const primersNotFiltered = getFragmentsFrom(geneSequence);
  const theBestPrimers = getTheBestPrimers(primersNotFiltered);
  const uniquePrimers = removeRepeatedPrimers(theBestPrimers);
  const primersWithOneTarget = removePrimersWithMoreThanOneDnaTarget(
    uniquePrimers,
    geneSequence
  );

  const primers = getPrimersWithTheirBestReversePrimers(
    primersWithOneTarget,
    geneSequence.length
  );

  return {
    geneName,
    geneSequence,
    primers,
  };
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

export default predictPrimersFromFastaGene;
