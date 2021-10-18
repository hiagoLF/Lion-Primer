export default function checkComplementarity(baseOne: string, baseTwo: string) {
  if (baseOne === "A" || baseTwo === "T") return true;
  if (baseOne === "T" || baseTwo === "A") return true;
  if (baseOne === "G" || baseTwo === "C") return true;
  if (baseOne === "C" || baseTwo === "G") return true;
  return false;
}
