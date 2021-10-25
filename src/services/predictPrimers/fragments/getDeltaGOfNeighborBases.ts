import { basesDeltaG } from "../config/deltaG.json";

type BaseIndexType =
  | "AA"
  | "TT"
  | "AT"
  | "TA"
  | "CA"
  | "TG"
  | "GT"
  | "AC"
  | "CT"
  | "AG"
  | "GA"
  | "TC"
  | "CG"
  | "GC"
  | "GG"
  | "CC"
  | "G"
  | "A";

export default function getDeltaGOfNeighborBases(
  baseOne: string,
  baseTwo?: string
) {
  const bases = (baseOne + (baseTwo || "")) as BaseIndexType;
  const deltaG = basesDeltaG[bases];
  return deltaG;
}
