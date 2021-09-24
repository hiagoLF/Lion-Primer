import { PrimersType } from "../../../types/primers";

type MatchPrimersProps = {
  fowardPrimers: PrimersType[];
  reversePrimers: PrimersType[];
  geneLength: number;
};

type MatchPrimersFunction = (
  fowardPrimers: PrimersType[],
  reversePrimers: PrimersType[],
  geneLength: number
) => string;

export const matchPrimers: MatchPrimersFunction = (
  fowardPrimers,
  reversePrimers,
  geneLength
) => {

  // Percorre Foward Primers...
    // Para o atual primer..
    // instanciar constante do melhor primer reverso (MPR) (undefined inicialmente)
    // Percorrer primers reversos
      // Para o atual primer reverso...
        // A distância entre foward e reverso atual é maior que 700? --> Pula Primer Reverso
        // A distância entre foward e reverso atual é menor que 100? --> Pula Primer Reverso
        // Ainda não existe MPR? --> MPR se torna reverso atual --> Pula Primer Reverso
        // MPR está a mais de 500 de distância e reverso atual está abaixo disso?
          // MPR se torna p reverso atual --> Pula Pimer Reverso
        // MPR está a mais de 500 && reverso atual está acima de 500 && reverso atual está antes do MPR ?
          // MPR se torna p reverso atual --> Pula Pimer Reverso
        // MPR está a menos de 500 && reverso atual está a menos de 500 && reverso atual está depois do MPR ?
          // MPR se torna p reverso atual --> Pula Pimer Reverso
    // Depois que terminou de percorrer tudo...
    // Caso não encontrou MPR, retorna undefined
    // Se encontrou MPR
    // Retornar primer atual preenchido com seu match sendo o MPR


  return "Here we will combine primers";
};
