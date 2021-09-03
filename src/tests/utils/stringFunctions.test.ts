import {
  getOccurrencesNumberOfElementInText,
  turnTextStringBackToFront,
} from "../../services/predictPrimers";

describe("String Functions", () => {
  test("turnTextStringBackToFront", () => {
    const textResult = turnTextStringBackToFront("ATCGAGTCGTAGCGTAG");
    expect(textResult).toBe("GATGCGATGCTGAGCTA");
  });

  test("getOccurrencesNumberOfElementInText", () => {
    const occourrencesNumber = getOccurrencesNumberOfElementInText(
      "TAATTCTAGCT",
      "TTAGTGTGCTAATTCTAGCTTATGCTAGTCTATTAATTCTAGCTCGTGTCGATGTGACTGACTTAGGGTAATTCTAGCTCGCGGATGCTGTGACD"
    );
    expect(occourrencesNumber).toBe(3)
  });
});

export {};
