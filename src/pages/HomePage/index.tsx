import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import predictPrimersFromFastaGene from "../../services/predictPrimers";
import FileReceiver from "./components/FileReceiver";
import HomeHeader from "./components/HomeHeader";
import SubmitPrimersButton from "./components/SubmitPrimersButton";

import { HomePageContainer } from "./styles";

const HomePage: React.FC = () => {
  const [fileToSubmit, setFileToSubmit] = useState<Blob | undefined>(undefined);
  const [textToSubmit, setTextToSubmit] = useState<string>("");

  const history = useHistory();

  const submitFile = () => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      console.log(event.target?.result);
    };
    fileToSubmit && fileReader.readAsText(fileToSubmit);
    const primersResult = predictPrimersFromFastaGene(textToSubmit);
    history.push(`/primers?primers=${JSON.stringify(primersResult)}`);
  };

  const submitText = () => {
    const primersResult = predictPrimersFromFastaGene(textToSubmit);
    history.push(`/primers?primers=${JSON.stringify(primersResult)}`);
  };

  const handleSubmitButtonClick = () => {
    if (fileToSubmit) {
      submitFile();
      return;
    }
    if (textToSubmit) {
      submitText();
    }
  };

  return (
    <HomePageContainer>
      <HomeHeader />
      <FileReceiver setFile={setFileToSubmit} setText={setTextToSubmit} />
      <SubmitPrimersButton
        available={fileToSubmit || textToSubmit ? true : false}
        onClick={handleSubmitButtonClick}
      />
    </HomePageContainer>
  );
};

export default HomePage;
