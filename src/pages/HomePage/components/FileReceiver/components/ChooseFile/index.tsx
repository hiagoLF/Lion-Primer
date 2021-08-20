import React, {
   ChangeEventHandler,
   useState,
   useCallback,
   useEffect,
} from "react";
import { useDropzone } from "react-dropzone";

import { ChooseFileContainer, ChooseFileFromPC } from "./styles";

import textIcon from "../../../../../../assets/icons/text.svg";
import cancelIcon from "../../../../../../assets/icons/cancel.svg";
import dropIcon from "../../../../../../assets/icons/drop.svg";

type ChooseFileProps = {
   setFile: (file: File | undefined) => void;
};

const ChooseFile: React.FC<ChooseFileProps> = ({ setFile }) => {
   const [fileToSubmit, setFileToSubmit] = useState<File | undefined>(
      undefined
   );

   useEffect(() => {
      setFile(fileToSubmit);
   }, [fileToSubmit]);

   const hadleSelectFile: ChangeEventHandler<HTMLInputElement> = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (!event.target.files?.length) return;
      setFileToSubmit(event.target.files[0]);
   };

   const onDrop = useCallback((acceptedFiles: File[]) => {
      setFileToSubmit(acceptedFiles[0]);
   }, []);
   const { getRootProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <ChooseFileContainer>
         <div id="drag-and-drop" {...getRootProps()}>
            {isDragActive && (
               <div id="drop-over-zone">
                  <span>Pode Soltar!</span>
                  <img src={dropIcon} alt="Pode soltar" />
               </div>
            )}
            {!isDragActive && !fileToSubmit?.name && (
               <span> Arraste e solte o arquivo aqui</span>
            )}
            {!isDragActive && fileToSubmit?.name && (
               <div id="dropped-zone">
                  <img
                     id="cancel-icon"
                     src={cancelIcon}
                     alt="Cancelar"
                     onClick={() => setFileToSubmit(undefined)}
                  />
                  <img id="archive-icon" src={textIcon} alt="Arquivo Fasta" />
                  <span>{fileToSubmit.name}</span>
               </div>
            )}
         </div>

         <ChooseFileFromPC
            isLowOpacity={fileToSubmit?.name || isDragActive ? true : false}
         >
            <label htmlFor="select-file">Escolher Arquivo</label>
            <input
               id="select-file"
               type="file"
               accept=".fasta,.txt"
               onChange={hadleSelectFile}
               multiple={false}
               disabled={isDragActive}
            />
         </ChooseFileFromPC>
      </ChooseFileContainer>
   );
};

export default ChooseFile;
