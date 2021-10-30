import React from "react";
import styled from "styled-components";
import DownloadPrimersButton from "./components/DownloadPrimersButton";
import { saveFile } from "../../../../services/saveFile";
import { usePredictedPrimers } from "../../../../contexts/PrimersContext";
import { CombinedPrimersType } from "../../../../types/primers";
import { BottomButtonsContainer } from "./styles";

const blastLink = "https://blast.ncbi.nlm.nih.gov/Blast.cgi";
const primerManager =
  "https://www.bioinformatics.nl/cgi-bin/primer3plus/primer3manager.cgi";
const inSilicoPcr = "https://genome.ucsc.edu/cgi-bin/hgPcr";

const BottomButtons: React.FC = () => {
  const { predictedPrimers, primerChoosed } = usePredictedPrimers();

  const handleSaveTxtFileButtonCllick = () => {
    saveFile(
      predictedPrimers?.primers[primerChoosed] as CombinedPrimersType,
      predictedPrimers?.geneName as string
    );
  };

  return (
    <BottomButtonsContainer>
      <div id="title">
        <span>Baixar conjunto Selecinado</span>
        <span>Links Úteis</span>
      </div>
      <div id="buttons">
        <DownloadPrimersButton onClick={handleSaveTxtFileButtonCllick} />
        <div id="util-links">
          <a target="_blank" rel="noreferrer" href={blastLink}>
            <button id="ncbi">NCBI Blast</button>
          </a>
          <a target="_blank" rel="noreferrer" href={primerManager}>
            <button id="primer-manager">Primer3Manager</button>
          </a>
          <a target="_blank" rel="noreferrer" href={inSilicoPcr}>
            <button id="in-silico-pcr">UCSC In-Silico PCR</button>
          </a>
        </div>
      </div>
    </BottomButtonsContainer>
  );
};

export default BottomButtons;
