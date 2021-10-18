export type PrimersType = {
  cgContentAtFiveLastNucleotides: number;
  gcPercentage: number;
  meltingTemperature: number;
  positions: PrimersPositionsType;
  sequence: string;
  subsequentDinucleotidesAmount: number;
  subsequentRepeatedBases: number;
  reversePrimer?: PrimersType;
};

export type PrimersPositionsType = {
  finalNucleotidePosition: number;
  initialNucleotidePosition: number;
};

export type PredictedPrimersType = {
  geneName: string;
  geneSequence: string;
  primers: PrimersType[];
};

export type PrimersContexProps = {
  predictedPrimers: PredictedPrimersType | undefined;
  setPredictedPrimers: (predictedPrimers: PredictedPrimersType) => void;
  primerChoosed: number;
  setPrimerChoosed: (primerIndex: number) => void;
};

export type PrimersLocationsProps = {
  geneSequence?: String;
  fowardPrimerPositions?: PrimersPositionsType;
  reversePrimerPositions?: PrimersPositionsType;
};

export type RemovePrimersWithMoreThanOneDnaTargetType = (
  primers: PrimersType[],
  geneSequence: string,
  complementaryGeneSequence: string
) => PrimersType[];

export type BendType = {
  fragmentOne: string[];
  fragmentTwo: string[];
};