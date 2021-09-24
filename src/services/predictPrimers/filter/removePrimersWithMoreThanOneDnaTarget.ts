import { RemovePrimersWithMoreThanOneDnaTargetType } from "../../../types/primers";
import { getOccurrencesNumberOfElementInText } from "../stringUtils/getOccurrencesNumberOfElementInText";
import { turnTextStringBackToFront } from "../stringUtils/turnTextStringBackToFront";

export const removePrimersWithMoreThanOneDnaTarget: RemovePrimersWithMoreThanOneDnaTargetType =
  (primers, geneSequence, complementaryGeneSequence) => {
    const singleTargetPrimers = primers.filter(({ sequence }) => {
      const primerOccourrencesNumber = getOccurrencesNumberOfElementInText(
        sequence,
        geneSequence
      );

      if (primerOccourrencesNumber > 1) {
        return false;
      }

      const backToFrontPrimerSequence = turnTextStringBackToFront(sequence);
      const backToFrontPrimerOccourrencesInComplementaryGene =
        getOccurrencesNumberOfElementInText(
          backToFrontPrimerSequence,
          complementaryGeneSequence
        );

      if (backToFrontPrimerOccourrencesInComplementaryGene > 0) {
        return false;
      }

      return true;
    });

    return singleTargetPrimers;
  };
