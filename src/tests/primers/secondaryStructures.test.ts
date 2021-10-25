import getDeltaGOfNeighborBases from "../../services/predictPrimers/fragments/getDeltaGOfNeighborBases";
import getDeltaGValues from "../../services/predictPrimers/fragments/getDeltaGValues";
import getDimersDeltaGValues from "../../services/predictPrimers/secondaryStructures/getDimersDeltaGValues";
import getDimersFromBends from "../../services/predictPrimers/secondaryStructures/getDimersFromBends";
import getDimersFromSingleBend, {
  mergeLists,
} from "../../services/predictPrimers/secondaryStructures/getDimersFromSingleBend";
import getEveryPossibleBends from "../../services/predictPrimers/secondaryStructures/getEveryPossibleBends";
import {
  oligonucleotide,
  bendsResult,
} from "../fakeData/secondaryStructures.json";

describe("DimersDeltaG algorith", () => {
  test("getEveryPossibleBends should return every possible fragments that can form dimer", () => {
    const bends = getEveryPossibleBends(oligonucleotide);
    expect(bends).toStrictEqual(bendsResult);
  });

  test("getDimersFromSingleBend should return real dimers", () => {
    const singleBend = {
      fragmentOne: ["A", "G", "T", "C", "C", "A", "C", "A", "T", "C", "G"],
      fragmentTwo: ["C", "C", "A", "G", "T", "C", "G", "G", "A", "G", "C"],
    };
    singleBend.fragmentTwo.reverse();
    const dimersFormed = [
      ["G", "T", "C"],
      ["T", "C", "G"],
    ];
    const dimers = getDimersFromSingleBend(singleBend);
    expect(dimers).toStrictEqual(dimersFormed);
  });

  test("mergeLists should merge two arrays of the same size", () => {
    const arrayOne = ["A", "C", "T", "G", "A"];
    const arrayTwo = ["A", "C", "T", "G", "A"];
    const result = [
      ["A", "A"],
      ["C", "C"],
      ["T", "T"],
      ["G", "G"],
      ["A", "A"],
    ];
    const mergeResult = mergeLists(arrayOne, arrayTwo);
    expect(mergeResult).toStrictEqual(result);
  });

  test("getDimersFromBends should receive a lot of bends and return a list of dimers", () => {
    const fragmentOne = ["A", "G", "T", "C", "C", "A", "C", "A", "T", "C", "G"];
    const fragmentTwo = ["C", "C", "A", "G", "T", "C", "G", "G", "A", "G", "C"];
    fragmentTwo.reverse();
    const input = [
      {
        fragmentOne,
        fragmentTwo,
      },
      {
        fragmentOne,
        fragmentTwo,
      },
    ];
    const dimersFormed = [
      ["G", "T", "C"],
      ["T", "C", "G"],
      ["G", "T", "C"],
      ["T", "C", "G"],
    ];
    const dimers = getDimersFromBends(input);
    expect(dimers).toStrictEqual(dimersFormed);
  });

  test("getDeltaGOfNeighborBases should return deltaG from two bases", () => {
    expect(getDeltaGOfNeighborBases("C", "A")).toBe(-1.45);
    expect(getDeltaGOfNeighborBases("G")).toBe(0.98);
    expect(getDeltaGOfNeighborBases("C", "C")).toBe(-1.84);
  });

  test("getDeltaGValues should return a list of deltaG values according to dimers received", () => {
    const dimers = [
      ["A", "C", "T", "G"],
      ["T", "A", "A", "T"],
      ["G", "G", "T", "T"],
      ["G", "A", "A", "A"],
    ];
    const deltaGListValues = [-3.19, -1.43, -3.3, -2.32];
    const deltaGValues = getDeltaGValues(dimers);
    deltaGValues.forEach((value, index) => {
      expect(value).toBe(deltaGListValues[index]);
    });
  });

  test("getDimersDeltaGValues should receive an oligonucleotide and return deltaG from its eventual dimers", () => {
    const primerDna = ["C", "G", "C", "G", "C", "G", "C", "G", "C", "G"];
    const result = [-1.19, -3.43, -5.6, -7.84, -5.6, -3.43, -1.19];
    const dimersDeltaGValues = getDimersDeltaGValues(primerDna);
    expect(result).toStrictEqual(dimersDeltaGValues);
  });
});

export {};
