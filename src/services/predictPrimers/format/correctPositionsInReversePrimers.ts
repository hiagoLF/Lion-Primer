import { PrimersType } from "../../../types/primers";

export default function correctPositionsInReversePrimers(
  reversePrimers: PrimersType[],
  geneLength: number
): PrimersType[] {
  const primersWithCorrectedPositions = reversePrimers.map((primer) => {
    const { initialNucleotidePosition, finalNucleotidePosition } =
      primer.positions;

    const finalNucleotidePositionCorrected = getCorrectedPosition(
      initialNucleotidePosition,
      geneLength
    );

    const initialNucleotidePositionCorrected = getCorrectedPosition(
      finalNucleotidePosition,
      geneLength
    );

    return {
      ...primer,
      positions: {
        initialNucleotidePosition: initialNucleotidePositionCorrected,
        finalNucleotidePosition: finalNucleotidePositionCorrected,
      },
    };
  });

  return primersWithCorrectedPositions;
}

function getCorrectedPosition(position: number, genelength: number) {
  const correctPosition = genelength - position + 1;
  return correctPosition;
}
