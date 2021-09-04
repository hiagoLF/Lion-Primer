import { RemovePrimersWithMoreThanOneDnaTargetType } from "../../../types/primers";
import { getOccurrencesNumberOfElementInText } from "../stringUtils/getOccurrencesNumberOfElementInText";
import { turnTextStringBackToFront } from "../stringUtils/turnTextStringBackToFront";

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

      if (primerRepeatsNumber > 0 && backToFrontPrimerRepeatsNumber > 0) {
        return false;
      }

      return true;
    });

    return singleTargetPrimers;
  };
