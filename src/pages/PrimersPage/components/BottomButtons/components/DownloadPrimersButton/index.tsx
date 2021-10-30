import React from "react";

import { DownloadPrimersButtonContainer } from "./styles";

import textIcon from "../../../../../../assets/icons/txt-white.svg";

type SubmitBlastButtonProps = {
  onClick: () => void;
};

const SubmitBlastButton: React.FC<SubmitBlastButtonProps> = ({ onClick }) => {
  return (
    <DownloadPrimersButtonContainer onClick={onClick}>
      <span>Primers.txt</span>
      <img src={textIcon} alt="Download" />
    </DownloadPrimersButtonContainer>
  );
};

export default SubmitBlastButton;
