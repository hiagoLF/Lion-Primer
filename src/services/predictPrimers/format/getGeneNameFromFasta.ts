export function getGeneNameFromFasta(fataGene: string) {
  const geneHeader = fataGene.split("\n")[0];
  const geneName = geneHeader.replace(">", "").trim();
  return geneName;
}
