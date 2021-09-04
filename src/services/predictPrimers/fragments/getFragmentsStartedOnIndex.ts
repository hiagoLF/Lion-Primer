import { getFragmentInformations } from "./getFragmentInformations";

export function getFragmentsStartedOnIndex(
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
