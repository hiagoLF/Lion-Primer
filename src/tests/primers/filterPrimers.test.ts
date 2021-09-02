import { removeRepeatedPrimers } from "../../services/predictPrimers";

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
];

test("Should Remove repeated primers", () => {
  const uniquePrimers = removeRepeatedPrimers(primers);
  expect(uniquePrimers.length).toBe(2) 
});

export {};
