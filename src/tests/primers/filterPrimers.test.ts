import {
  removePrimersWithMoreThanOneDnaTarget,
  removeRepeatedPrimers,
} from "../../services/predictPrimers";

import { primers, primersWithMoreThanOndeDnaTarget } from "./fakePrimers.json";
import { geneSequenceWithMoreThanOneTarge } from "./fakeGene.json";
import { PrimersType } from "../../types/primers";

describe("Functions to filter primers", () => {
  it("Should Remove repeated primers", () => {
    const uniquePrimers = removeRepeatedPrimers(primers);
    expect(uniquePrimers.length).toBe(4);
  });

  it("Should remove primers with more than one dna target", () => {
    const primersResult = removePrimersWithMoreThanOneDnaTarget(
      primersWithMoreThanOndeDnaTarget as PrimersType[],
      geneSequenceWithMoreThanOneTarge
    );
    expect(primersResult.length).toBe(2);
  });
});

export {};
