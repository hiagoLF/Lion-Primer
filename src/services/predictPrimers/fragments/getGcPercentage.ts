import { getAmountNumberOfNitrogenBaseInFragment } from "./getAmountNumberOfNitrogenBaseInFragment";

export function getGcPercentage(fragment: string[]) {
  const gAmountNumber = getAmountNumberOfNitrogenBaseInFragment("G", fragment);
  const cAmountNumber = getAmountNumberOfNitrogenBaseInFragment("C", fragment);
  const gcAmountNumber = gAmountNumber + cAmountNumber;
  const gcPercentage = (gcAmountNumber / fragment.length) * 100;
  return gcPercentage;
}
