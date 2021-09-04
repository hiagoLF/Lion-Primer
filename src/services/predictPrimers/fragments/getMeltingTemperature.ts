import { getAmountNumberOfNitrogenBaseInFragment } from "./getAmountNumberOfNitrogenBaseInFragment";

export function getMeltingTemperature(fragment: string[]) {
  const cContentNumber = getAmountNumberOfNitrogenBaseInFragment("C", fragment);
  const gContentNumber = getAmountNumberOfNitrogenBaseInFragment("G", fragment);
  const aContentNumber = getAmountNumberOfNitrogenBaseInFragment("A", fragment);
  const tContentNumber = getAmountNumberOfNitrogenBaseInFragment("T", fragment);
  const meltingTemperature =
    4 * (gContentNumber + cContentNumber) +
    2 * (aContentNumber + tContentNumber);
  return meltingTemperature;
}
