export type PrimersType = {
  cgContentAtFiveLastNucleotides: number;
  gcPercentage: number;
  meltingTemperature: number;
  positions: {
    finalNucleotidePosition: number;
    initialNucleotidePosition: number;
  };
  sequence: string;
  subsequentDinucleotidesAmount: number;
  subsequentRepeatedBases: number
};
