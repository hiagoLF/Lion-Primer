import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PrimersProvider,
  usePredictedPrimers,
} from "../../contexts/PrimersContext";
import BottomButtons from "./components/BottomButtons";
import GeneName from "./components/GeneName";
import PrimersAndPositions from "./components/PrimersAndPositions";

import { PrimersPageContainer } from "./styles";

const PrimersPage: React.FC = () => {
  const location = useLocation();
  const { setPredictedPrimers } = usePredictedPrimers();

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const primersStringified = searchParam.get("primers") || "";
    const primers = primersStringified
      ? JSON.parse(primersStringified)
      : undefined;
    setPredictedPrimers(primers);
  }, [location, setPredictedPrimers]);

  return (
    <PrimersPageContainer>
      <GeneName />
      <PrimersAndPositions />
      <BottomButtons />
    </PrimersPageContainer>
  );
};

const PrimersPageWithContext: React.FC = () => {
  return (
    <PrimersProvider>
      <PrimersPage />
    </PrimersProvider>
  );
};

export default PrimersPageWithContext;
