import React, { useState } from "react";

import { TypeSequenceOnKeyboardContainer } from "./styles";

const typeSequencePlaceholder =
   "> gene 342bgd \nACTTCATCTCAGAAGACTCCAGATATAGGATCACTCCA\nCACATATAGATAATTTAAGTAGGTAGATGTATGTGCTG\nCCGAAATCATATGCACAAAAATTTTTTTTAGAATATAA\nTTCAAAGATAAAGTTAGGCTTTCAGTAACGTTAGAAAT\nCTTTGAGGAAGTAAATACTGTAAATAGATGTTTCAAAC\nAAGCTACAGTATTGTGCTGTCTTTGAAATGTAAACTTT\nGGGCCCATCTCAAGCTGATCTTGGCACCTCTCATGCTC\nTTGGAAGAAGACTAAAAATGGTAAGAACAGCTCAGAGA\nAAACAACTGAAACCAGCTGGCAAGAGCAATATTGAAGA\nGCTTCCTGATATTTCACAATTGGCATTAATGAAGGGGG\n...";

type TypeSequenceOnKeyboardProps = {
   setText: (text: string) => void;
};

const TypeSequenceOnKeyboard: React.FC<TypeSequenceOnKeyboardProps> = ({
   setText,
}) => {
   return (
      <TypeSequenceOnKeyboardContainer>
         <span>Digite a Sequencia aqui</span>

         <textarea
            placeholder={typeSequencePlaceholder}
            onChange={(event) => setText(event.target.value)}
         />
      </TypeSequenceOnKeyboardContainer>
   );
};

export default TypeSequenceOnKeyboard;
