import { BendType } from "../../../types/primers";

export default function getEveryPossibleBends(oligonucleotide: string[]) {
  const bends: BendType[] = [];

  for (
    let divisionPositioin = 2;
    divisionPositioin < oligonucleotide.length-1;
    divisionPositioin++
  ) {
    let firstPart = oligonucleotide.slice(0, divisionPositioin);
    let secondPart = oligonucleotide.slice(
      divisionPositioin,
      oligonucleotide.length
    );
    if (firstPart !== [] && secondPart !== []) {

      if(firstPart.length > secondPart.length){
        firstPart = firstPart.slice(firstPart.length - secondPart.length, firstPart.length)
      }else{
        secondPart = secondPart.slice(0, firstPart.length)
      }

      bends.push({
        fragmentOne: firstPart,
        fragmentTwo: secondPart,
      });
    }
  }

  return bends
}
