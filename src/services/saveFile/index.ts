import { CombinedPrimersType } from "../../types/primers";
import { saveAs } from "file-saver";

export function saveFile(primers: CombinedPrimersType, geneName: string) {
  var blob = new Blob(
    [
      "Primers para amplificação em PCR\n",
      `Gene: ${geneName}\n`,
      "\n",
      "---------\n",
      "\n",
      "Primer Foward\n",
      `Sequência: 5'-${primers.fowardPrimer.sequence}-3'\n`,
      `Tm: ${primers.fowardPrimer.meltingTemperature}°C\t|\tPosição: ${primers.fowardPrimer.positions.initialNucleotidePosition} - ${primers.fowardPrimer.positions.finalNucleotidePosition}\n`,
      `Br: ${
        primers.fowardPrimer.subsequentRepeatedBases
      }\t\t|\tG+G: ${primers.fowardPrimer.gcPercentage.toFixed(2)}%\n`,
      "\n",
      "---------\n",
      "\n",
      "Primer Reverse\n",
      `Sequência: 5'-${primers.reversePrimer.sequence}-3'\n`,
      `Tm: ${primers.reversePrimer.meltingTemperature}°C\t|\tPosição: ${primers.reversePrimer.positions.initialNucleotidePosition} - ${primers.reversePrimer.positions.finalNucleotidePosition}\n`,
      `Br: ${
        primers.reversePrimer.subsequentRepeatedBases
      }\t\t|\tG+G: ${primers.reversePrimer.gcPercentage.toFixed(2)}%\n`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, "primers.txt");
}
