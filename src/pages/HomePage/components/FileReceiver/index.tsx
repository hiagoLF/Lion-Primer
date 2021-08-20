import React, { useEffect, useState } from "react";
import ChooseFile from "./components/ChooseFile";
import TypeSequenceOnKeyboard from "./components/TypeSequenceOnKeyboard";

import { FileReceiverContainer } from "./styles";

type FileReceiverProps = {
   setFile: (file: File | undefined) => void;
   setText: (text: string) => void;
};

const FileReceiver: React.FC<FileReceiverProps> = ({ setFile, setText }) => {
   return (
      <FileReceiverContainer>
         <TypeSequenceOnKeyboard setText={setText} />
         <span id="or-text">ou</span>
         <ChooseFile setFile={setFile} />
      </FileReceiverContainer>
   );
};

export default FileReceiver;
