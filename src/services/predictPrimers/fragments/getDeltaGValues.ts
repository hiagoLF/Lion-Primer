import getDeltaGOfNeighborBases from "./getDeltaGOfNeighborBases";

export default function getDeltaGValues(dimers: Array<string[]>) {
  const deltaGValues = dimers.map((dimer): number => {
    let deltaG = 0;
    let isThereCGNucleation = false;

    dimer.forEach((base, baseIndex, baseList) => {
      if ("CG".includes(base) || "CG".includes(baseList[baseIndex + 1])) {
        isThereCGNucleation = true;
      }
      if (baseList[baseIndex + 1]) {
        const basesDeltaG = getDeltaGOfNeighborBases(
          base,
          baseList[baseIndex + 1]
        );
        deltaG = deltaG + basesDeltaG;
      }
    });

    if (isThereCGNucleation) {
      deltaG = deltaG + getDeltaGOfNeighborBases("G");
    } else {
      deltaG = deltaG + getDeltaGOfNeighborBases("A");
    }

    return parseFloat(deltaG.toFixed(2));
  });
  return deltaGValues;
}
