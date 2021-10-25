import getDeltaGValues from "../fragments/getDeltaGValues";
import getDimersFromBends from "./getDimersFromBends";
import getEveryPossibleBends from "./getEveryPossibleBends";

export type SecondaryStructureType = {
  deltaG: number;
  position: "internal" | "end";
};

export default function getDimersDeltaGValues(oligonucleotide: string[]) {
  const oligoBends = getEveryPossibleBends(oligonucleotide);
  const dimers = getDimersFromBends(oligoBends);
  const dimersWithDeltaGValues = getDeltaGValues(dimers);
  return dimersWithDeltaGValues
}

