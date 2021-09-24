import { removePrimersWithMoreThanOneDnaTarget } from "./filter/removePrimersWithMoreThanOneDnaTarget";
import correctPositionsInReversePrimers from "./format/correctPositionsInReversePrimers";
import getDnaComplementarSequenceFrom from "./format/getDnaComplementarSequenceFrom";
import { getGeneNameFromFasta } from "./format/getGeneNameFromFasta";
import { getGeneSequenceFromFasta } from "./format/getGeneSequenceFromFasta";
import findPrimersOnSingleSequence from "./fragments/findPrimersOnSingleSequence";
import { matchPrimers } from "./primerComplement/matchPrimers";

function predictPrimersFromFastaGene(fataGene: string) {
  const geneName = getGeneNameFromFasta(fataGene);
  const geneSequence = getGeneSequenceFromFasta(fataGene);

  const complementaryGeneSequence =
    getDnaComplementarSequenceFrom(geneSequence);

  const reversePrimers = findPrimersOnSingleSequence(complementaryGeneSequence);
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

  const reversePrimersWithPosisionsCorrected = correctPositionsInReversePrimers(
    reversePrimersWithOneTarget,
    geneSequence.length
  );

  const combinedPrimers = matchPrimers(
    fowardPrimersWithOneTarget,
    reversePrimersWithPosisionsCorrected,
    geneSequence.length
  );

  return {
    geneName,
    geneSequence,
    primers: combinedPrimers,
  };
}

export default predictPrimersFromFastaGene;
