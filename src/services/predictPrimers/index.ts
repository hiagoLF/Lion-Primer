import { CombinedPrimersType } from "../../types/primers";
import { removePrimersWithMoreThanOneDnaTarget } from "./filter/removePrimersWithMoreThanOneDnaTarget";
import correctPositionsInReversePrimers from "./format/correctPositionsInReversePrimers";
import getDnaComplementarSequenceFrom from "./format/getDnaComplementarSequenceFrom";
import { getGeneNameFromFasta } from "./format/getGeneNameFromFasta";
import { getGeneSequenceFromFasta } from "./format/getGeneSequenceFromFasta";
import findPrimers from "./fragments/findPrimers";
import reducePrimersNumberByDimersDeltaGValueAndMelting from "./fragments/reducePrimersNumberByDimersDeltaGValueAndMelting";
import filterPrimersAndMatch from "./primerComplement/filterPrimersAndMatch";

async function predictPrimersFromFastaGene(fataGene: string): Promise<{
  geneName: string;
  geneSequence: string;
  primers: CombinedPrimersType[];
}> {
  return new Promise((resolve) => {
    const geneName = getGeneNameFromFasta(fataGene);
    const geneSequence = getGeneSequenceFromFasta(fataGene);

    const complementaryGeneSequence =
      getDnaComplementarSequenceFrom(geneSequence);

    const { reversePrimers, fowardPrimers } = findPrimers(
      complementaryGeneSequence,
      geneSequence
    );

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

    const combinedPrimers = filterPrimersAndMatch(
      fowardPrimersWithOneTarget,
      reversePrimersWithPosisionsCorrected
    );

    const reducedPrimers =
      reducePrimersNumberByDimersDeltaGValueAndMelting(combinedPrimers);

    // const primersAndAnelingTemperatures =
    //   getPrimersAnelingTemperatures(combinedPrimers);

    resolve({
      geneName,
      geneSequence,
      primers: reducedPrimers,
    });
  });
}

export default predictPrimersFromFastaGene;
