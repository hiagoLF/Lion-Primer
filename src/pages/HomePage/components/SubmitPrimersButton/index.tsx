import React from "react";

import { SubmitPrimersButtonContainer } from "./styles";

type SubmitPrimersButtonProps = {
  available: boolean;
  onClick: () => void;
};

const SubmitPrimersButton: React.FC<SubmitPrimersButtonProps> = ({
  available,
  onClick,
}) => {
  return (
    <SubmitPrimersButtonContainer
      available={available}
      onClick={available ? onClick : () => {}}
    >
      <span>Vai</span>
    </SubmitPrimersButtonContainer>
  );
};

export default SubmitPrimersButton;
