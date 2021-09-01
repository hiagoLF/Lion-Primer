import React from "react";
import { PrimersType } from "../../../../types/primers";

import { SinglePrimersDescriptionBoxContainer } from "./styles";

type SinglePrimersDescriptionBoxProps = {
  primersDescription: PrimersType;
  primerSense: "foward" | "reverse";
};

const SinglePrimersDescriptionBox: React.FC<SinglePrimersDescriptionBoxProps> =
  ({ primersDescription, primerSense }) => {
    return (
      <SinglePrimersDescriptionBoxContainer primerSense={primerSense}>
        <div id="sense-and-sequence">
          <span className="low-opacity">
            {primerSense === "foward" ? "Senso" : "Reverso"}
          </span>
          <div id="sequence">
            <span className="low-opacity">5'</span>
            <span>AGCTGACGATCGATCTAGCTAGC</span>
            <span className="low-opacity"> 3'</span>
          </div>
        </div>

        <div id="left-descriptions">
          <div className="description-column-container">
            <div className="single-desciption">
              <span className="low-opacity">Temperatura de Melting</span>
              <span>Tm: 53°C</span>
            </div>
            <div className="single-desciption">
              <span className="low-opacity">
                Bases Repetidas em Subsequência
              </span>
              <span>BR: 7nt</span>
            </div>
          </div>

          <div className="description-column-container">
            <div className="single-desciption">
              <span className="low-opacity">Posição</span>
              <span>50 - 69</span>
            </div>
            <div className="single-desciption">
              <span className="low-opacity">Porcentagem de GC</span>
              <span>G + C = 52%</span>
            </div>
          </div>
        </div>
      </SinglePrimersDescriptionBoxContainer>
    );
  };

export default SinglePrimersDescriptionBox;
