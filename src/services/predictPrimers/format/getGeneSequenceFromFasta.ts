export function getGeneSequenceFromFasta(fataGene: string) {
  const fastaLines = fataGene.trim().split("\n");
  if (fastaLines[0][0].includes(">")) {
    fastaLines.shift();
  }
  const geneSequence = fastaLines.join("");
  return geneSequence;
}
