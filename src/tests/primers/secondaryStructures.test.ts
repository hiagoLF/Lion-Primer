import getEveryPossibleBends from "../../services/predictPrimers/secondaryStructures/getEveryPossibleBends";
import {
  oligonucleotide,
  bendsResult,
} from "../fakeData/secondaryStructures.json";

describe("SecondaryStructures algorith", () => {
  test("getEveryPossibleBends should return every possible fragments that can form dimer", () => {
    const bends = getEveryPossibleBends(oligonucleotide);
    console.log(bends)
    expect(bends).toStrictEqual(bendsResult);
  });
});

export {};
