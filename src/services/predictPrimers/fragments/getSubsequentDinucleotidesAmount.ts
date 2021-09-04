export function getSubsequentDinucleotidesAmount(fragment: string[]) {
  let subsequentDinucleotideAmount = 0;
  let dinucleotideIndex = 0;
  let foundNucleotide = false;

  while (dinucleotideIndex < fragment.length - 3) {
    const currentDinucleotide = [
      fragment[dinucleotideIndex],
      fragment[dinucleotideIndex + 1],
    ].join("");
    const nextDinucleotide = [
      fragment[dinucleotideIndex + 2],
      fragment[dinucleotideIndex + 3],
    ].join("");
    if (currentDinucleotide === nextDinucleotide) {
      subsequentDinucleotideAmount++;
      dinucleotideIndex = dinucleotideIndex + 2;
      foundNucleotide = true;
    } else {
      if (foundNucleotide) {
        foundNucleotide = false;
        subsequentDinucleotideAmount++;
      }
      dinucleotideIndex++;
    }
  }
  return subsequentDinucleotideAmount;
}
