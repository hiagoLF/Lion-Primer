import { CombinedPrimersType } from "../../types/primers";
import { removePrimersWithMoreThanOneDnaTarget } from "./filter/removePrimersWithMoreThanOneDnaTarget";
import correctPositionsInReversePrimers from "./format/correctPositionsInReversePrimers";
import getDnaComplementarSequenceFrom from "./format/getDnaComplementarSequenceFrom";
import { getGeneNameFromFasta } from "./format/getGeneNameFromFasta";
import { getGeneSequenceFromFasta } from "./format/getGeneSequenceFromFasta";
import findPrimersOnSingleSequence from "./fragments/findPrimersOnSingleSequence";
import reducePrimersNumberByDimersDeltaGValue from "./fragments/reducePrimersNumberByDimersDeltaGValue";
import { matchPrimers } from "./primerComplement/matchPrimers";

async function predictPrimersFromFastaGene(
  fataGene: string
): Promise<{
  geneName: string;
  geneSequence: string;
  primers: CombinedPrimersType[];
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const geneName = getGeneNameFromFasta(fataGene);
      const geneSequence = getGeneSequenceFromFasta(fataGene);

      const complementaryGeneSequence =
        getDnaComplementarSequenceFrom(geneSequence);

      const reversePrimers = findPrimersOnSingleSequence(
        complementaryGeneSequence
      );
      const fowardPrimers = findPrimersOnSingleSequence(geneSequence);

      const fowardPrimersWithOneTarget = removePrimersWithMoreThanOneDnaTarget(
        fowardPrimers,
        geneSequence,
        complementaryGeneSequence
      );

      const reversePrimersWithOneTarget = removePrimersWithMoreThanOneDnaTarget(
        reversePrimers,
        complementaryGeneSequence,
        geneSequence
      );

      const reversePrimersWithPosisionsCorrected =
        correctPositionsInReversePrimers(
          reversePrimersWithOneTarget,
          geneSequence.length
        );

      const combinedPrimers = matchPrimers(
        fowardPrimersWithOneTarget,
        reversePrimersWithPosisionsCorrected
      );

      const reducedPrimers =
        reducePrimersNumberByDimersDeltaGValue(combinedPrimers);

      resolve({
        geneName,
        geneSequence,
        primers: reducedPrimers,
      });
    }, 2000);
  });
}

export default predictPrimersFromFastaGene;
