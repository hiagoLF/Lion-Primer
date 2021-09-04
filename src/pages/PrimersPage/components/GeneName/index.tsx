import React from "react";
import ImportantTitle from "../../../../components/ImportantTitle";
import { usePredictedPrimers } from "../../../../contexts/PrimersContext";

// import { Container } from './styles';

const GeneName: React.FC = () => {
  const { predictedPrimers } = usePredictedPrimers();

  return (
    <ImportantTitle width={920}>
      <h1>{predictedPrimers?.geneName}</h1>
    </ImportantTitle>
  );
};

export default GeneName;
