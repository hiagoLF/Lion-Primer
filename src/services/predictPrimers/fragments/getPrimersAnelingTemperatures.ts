import { CombinedPrimersType } from "../../../types/primers";

export function getPrimersAnelingTemperatures(
  combinedPrimers: CombinedPrimersType[],
) {
  const combinedPrimersWithAnelingTemperature: CombinedPrimersType[] =
    combinedPrimers.map((combination) => {
      const anelingTemperature =
        0.3 * combination.fowardPrimer.meltingTemperature +
        0.7 * combination.reversePrimer.meltingTemperature -
        14.9;
      return {
        ...combination,
        anelingTemperature,
      };
    });

  return combinedPrimersWithAnelingTemperature;
  // Transformar o gene em array
  // Pegar o trecho do gene que é amplificado
  // Calcular temperatura de melting do trecho de gene amplificado
  // Calcular temperatura de anelamento
  // Incluir temperatura de anelamento
}
