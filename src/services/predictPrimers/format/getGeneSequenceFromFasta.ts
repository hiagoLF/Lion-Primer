export function getGeneSequenceFromFasta(fataGene: string) {
  const fastaLines = fataGene.split("\n");
  fastaLines.shift();
  const geneSequence = fastaLines.join("");
  return geneSequence;
}
