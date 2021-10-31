import React from "react";
import { LearnPCRContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import undertandingPCR from "../../assets/texts/pcr";

const LearnPCR: React.FC = () => {
  return (
    <LearnPCRContainer>
      <div id="post-area">
        <ReactMarkdown>{undertandingPCR}</ReactMarkdown>
      </div>
    </LearnPCRContainer>
  );
};

export default LearnPCR;
