
export function getAmountNumberOfNitrogenBaseInFragment(
    nitrogenBase: string,
    fragment: string[]
  ) {
    let amountNumberOfNitrogenBase = 0;
    fragment.forEach((fragmentNitrogenBase) => {
      if (fragmentNitrogenBase === nitrogenBase) {
        amountNumberOfNitrogenBase++;
      }
    });
    return amountNumberOfNitrogenBase;
  }