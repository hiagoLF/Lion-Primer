import { expose } from "comlink";
import predictPrimersFromFastaGene from "./";

const worker = {
  predictPrimersFromFastaGene,
};

export type PredictPrimersFromFastaGene = typeof worker;

expose(worker);
