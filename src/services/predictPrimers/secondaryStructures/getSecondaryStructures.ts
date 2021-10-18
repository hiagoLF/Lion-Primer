import getDimersFromBens from "./getDimersFromBens";
import getEveryPossibleBends from "./getEveryPossibleBends";

export type SecondaryStructureType = {
  deltaG: number;
  position: "internal" | "end";
};

export default function getSecondaryStructures(oligonucleotide: string[]) {
  const oligoBends = getEveryPossibleBends(oligonucleotide);
  const dimers = getDimersFromBens(oligoBends);
  // const dimersWithDeltaGValues = getDeltaGValues(dimers);
}

