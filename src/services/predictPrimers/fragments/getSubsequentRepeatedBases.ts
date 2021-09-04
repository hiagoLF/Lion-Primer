export function getSubsequentRepeatedBases(fragment: string[]) {
  let subsequentRepeatedBases = 0;
  let subsequentRepeatedBaseFound = false;

  fragment.forEach((currentBase, currentBaseIndex) => {
    if (currentBase === fragment[currentBaseIndex + 1]) {
      subsequentRepeatedBases++;
      subsequentRepeatedBaseFound = true;
    } else {
      if (subsequentRepeatedBaseFound) {
        subsequentRepeatedBases++;
        subsequentRepeatedBaseFound = false;
      }
    }
  });

  return subsequentRepeatedBases;
}
