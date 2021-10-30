import React from "react";

import { PageHeaderContainer } from "./styles";
import dnaIcon from "../../assets/icons/dna-white.png";

const PageHeader: React.FC = () => {
  
  const handleLogoContainerClick = () => window.location.href = '#/'

  return (
    <PageHeaderContainer>
      <div id="header-content">
        <div id="logo-container" onClick={handleLogoContainerClick}>
          <img src={dnaIcon} alt="DNA" />
          <h2>Lion Primer</h2>
        </div>

        <div id="header-buttons">
          <a href="#/">Início</a>
          <a href="#/about-pcr">Entenda PCR</a>
          <a href="#/credits">Créditos</a>
        </div>
      </div>
    </PageHeaderContainer>
  );
};

export default PageHeader;
