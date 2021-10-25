import { BendType } from "../../../types/primers";
import getDimersFromSingleBend from "./getDimersFromSingleBend";

export type DimersSequences = Array<string[]>;

export default function getDimersFromBends(oligoBends: BendType[]) {
  const dimers = oligoBends.map((bend) => {
    return getDimersFromSingleBend(bend);
  });

  return dimers.flat();
}
