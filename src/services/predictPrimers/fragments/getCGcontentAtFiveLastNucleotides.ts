export function getCGcontentAtFiveLastNucleotides(fragment: string[]) {
  let cgAmount = 0;
  for (
    let nitrogenBaseIndex = fragment.length - 5;
    nitrogenBaseIndex <= fragment.length;
    nitrogenBaseIndex++
  ) {
    if (
      fragment[nitrogenBaseIndex] === "C" ||
      fragment[nitrogenBaseIndex] === "G"
    ) {
      cgAmount++;
    }
  }
  return cgAmount;
}
