import React from "react";

import { ImportantTitleContainer } from "./styles";

type ImportantTitleProps = {
   width?: number;
};

const ImportantTitle: React.FC<ImportantTitleProps> = ({ children, width }) => {
   return (
      <ImportantTitleContainer width={width}>
         {children}
      </ImportantTitleContainer>
   );
};

export default ImportantTitle;
