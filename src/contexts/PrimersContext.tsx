import React, { createContext, useContext, useState } from "react";
import { PredictedPrimersType, PrimersContexProps } from "../types/primers";

const PrimersContext = createContext<PrimersContexProps>({
  predictedPrimers: { geneName: "", geneSequence: "", primers: [] },
  setPredictedPrimers: (predictedPrimers) =>
    console.warn("Predicted Primers Not Provided"),
  primerChoosed: 1,
  setPrimerChoosed: (primerChoosed) => {},
});

export const PrimersProvider: React.FC = ({ children }) => {
  const [predictedPrimers, setPredictedPrimers] =
    useState<PredictedPrimersType>();
    const [primerChoosed, setPrimerChoosed] = useState<number>(0)

  return (
    <PrimersContext.Provider value={{ predictedPrimers, setPredictedPrimers, primerChoosed, setPrimerChoosed }}>
      {children}
    </PrimersContext.Provider>
  );
};

export const usePredictedPrimers = () => useContext(PrimersContext);
