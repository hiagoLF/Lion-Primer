export default function getDnaComplementarSequenceFrom(geneSequence: string) {
  const geneConvertedToArray = geneSequence.split("");
  const complementarGeneArray = geneConvertedToArray.map((nitrogenBase) => {
    switch (nitrogenBase) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "G":
        return "C";
      case "C":
        return "G";
    }
    return ''
  });
  complementarGeneArray.reverse();
  const complementaryGeneString = complementarGeneArray.join("");
  return complementaryGeneString;
}
