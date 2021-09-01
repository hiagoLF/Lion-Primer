import React, { createContext, useContext, useState } from "react";
import { PredictedPrimersType, PrimersContexProps } from "../types/primers";

const PrimersContext = createContext<PrimersContexProps>({
  predictedPrimers: { geneName: "", geneSequence: "", primers: [] },
  setPredictedPrimers: (predictedPrimers) =>
    console.warn("Predicted Primers Not Provided"),
});

export const PrimersProvider: React.FC = ({ children }) => {
  const [predictedPrimers, setPredictedPrimers] =
    useState<PredictedPrimersType>();

  return (
    <PrimersContext.Provider value={{ predictedPrimers, setPredictedPrimers }}>
      {children}
    </PrimersContext.Provider>
  );
};

export const usePredictedPrimers = () => useContext(PrimersContext);
