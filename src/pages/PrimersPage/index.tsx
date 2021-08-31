import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomButtons from "./components/BottomButtons";
import GeneName from "./components/GeneName";
import PrimersAndPositions from "./components/PrimersAndPositions";

import { PrimersPageContainer } from "./styles";

const PrimersPage: React.FC = () => {
  const location = useLocation();
  const [geneAndPrimers, setGeneAndPrimers] = useState(undefined)

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const primers = searchParam.get("primers") || '';
    setGeneAndPrimers(JSON.parse(primers))
  }, [location]);

  console.log(geneAndPrimers)

  return (
    <PrimersPageContainer>
      <GeneName />
      <PrimersAndPositions />
      <BottomButtons />
    </PrimersPageContainer>
  );
};

export default PrimersPage;
