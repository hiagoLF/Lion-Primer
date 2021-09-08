export function getGeneNameFromFasta(fataGene: string) {
  const geneTitle = fataGene.trim().split("\n")[0];
  if(geneTitle.indexOf('>') === -1){
    return 'Gene Desconhecido'
  }
  geneTitle.replace('>', '')
  return geneTitle;
}
