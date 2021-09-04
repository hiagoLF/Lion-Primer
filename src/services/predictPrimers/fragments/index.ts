import { getFragmentsStartedOnIndex } from "./getFragmentsStartedOnIndex";

export function getFragmentsFrom(geneSequence: string) {
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
