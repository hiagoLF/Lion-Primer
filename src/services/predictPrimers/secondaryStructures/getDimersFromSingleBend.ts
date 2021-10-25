import { BendType } from "../../../types/primers";
import checkComplementarity from "./checkComplementarity";

export default function getDimersFromSingleBend(
  bend: BendType
): Array<string[]> {
  const { fragmentOne, fragmentTwo } = bend;
  const fragmentTwoCopy = [...fragmentTwo].reverse();
  const bendsCast: Array<[string, string]> = mergeLists(
    fragmentOne,
    fragmentTwoCopy
  );

  // ..... Não mexe daqui pra cima

  const dimers: Array<string[]> = [];
  let foundDimer = true;
  bendsCast.forEach((basePair, index, bendsCastList) => {
    if (checkComplementarity(basePair[0], basePair[1])) {
      if (
        checkComplementarity(
          bendsCastList[index + 1] ? bendsCastList[index + 1][0] : "A",
          bendsCastList[index + 1] ? bendsCastList[index + 1][1] : "G"
        )
      ) {
        dimers.length === 0 && dimers.push([]);
        dimers[dimers.length - 1].push(basePair[0]);
        foundDimer = true;
      } else {
        if (foundDimer) {
          foundDimer = false;
          if (dimers.length === 0) dimers.push([]);
          dimers[dimers.length - 1].push(basePair[0]);
          dimers.push([]);
        }
      }
    }
  });
  dimers.pop();

  return dimers;
}

export function mergeLists(listOne: Array<any>, listTwo: Array<any>) {
  let castList: any[] = [];
  listOne.forEach((listOneElement, index) => {
    castList.push([listOneElement, listTwo[index]]);
  });
  return castList;
}
