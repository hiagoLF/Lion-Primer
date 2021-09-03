import {
  removePrimersWithMoreThanOneDnaTarget,
  removeRepeatedPrimers,
} from "../../services/predictPrimers";

const primers = [
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "ACTAGGGCGAGCGGTAGCTTA",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "ATCGATTTCGTTAGCTTACAA",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "ATCGATTTCGTTAGCTTACAA",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "ATTTTCTCTTCGGAGAGACTAGCA",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "TAGGGCGAT",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
  {
    cgContentAtFiveLastNucleotides: 0,
    gcPercentage: 0,
    meltingTemperature: 0,
    positions: { finalNucleotidePosition: 0, initialNucleotidePosition: 0 },
    sequence: "AGCGGCGGAGC",
    subsequentDinucleotidesAmount: 0,
    subsequentRepeatedBases: 0,
  },
];

const geneSequence = "TGCATCTAGGGCGATTTTTAGCGGCGGAGCTATGCGGATGCTTAGGGCGATATTCGTAGCGGAGCGATGCGTCGATCCGAGGCGGCGAGATCGA";

describe("Functions to filter primers", () => {
  it("Should Remove repeated primers", () => {
    const uniquePrimers = removeRepeatedPrimers(primers);
    expect(uniquePrimers.length).toBe(4);
  });

  it("Should remove primers with more than one dna target", () => {
    const primersResult = removePrimersWithMoreThanOneDnaTarget(primers, geneSequence);
    expect(primersResult.length).toBe(4)


  });
});

export {};
