import React from "react";

import { PageHeaderContainer } from "./styles";
import dnaIcon from "../../assets/icons/dna-white.png";

const PageHeader: React.FC = () => {
   return (
      <PageHeaderContainer>
         <div id="header-content">
            <div id="logo-container">
               <img src={dnaIcon} alt="DNA" />
               <h2>Lion Primer</h2>
            </div>
            <div id="header-buttons">
               <span>Ajuda</span>
               <span>Créditos</span>
            </div>
         </div>
      </PageHeaderContainer>
   );
};

export default PageHeader;
