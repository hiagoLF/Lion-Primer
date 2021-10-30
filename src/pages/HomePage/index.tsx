import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import predictPrimersFromFastaGene from "../../services/predictPrimers";
import FileReceiver from "./components/FileReceiver";
import HomeHeader from "./components/HomeHeader";
import SubmitPrimersButton from "./components/SubmitPrimersButton";
import ReactLoading from "react-loading";
import { HomePageContainer } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrap } from "comlink";

const worker = new Worker("../../services/predictPrimers/worker", {
  name: "predictPrimersWorker",
  type: "module",
});
const { predictPrimersFromFastaGene } =
  wrap<
    import("../../services/predictPrimers/worker").PredictPrimersFromFastaGene
  >(worker);

const HomePage: React.FC = () => {
  const [fileToSubmit, setFileToSubmit] = useState<Blob | undefined>(undefined);
  const [textToSubmit, setTextToSubmit] = useState<string>("");
  const [submiting, setSubmiting] = useState(false);

  const history = useHistory();

  const submitFile = async () => {
    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const primersResult = await predictPrimersFromFastaGene(
        event.target?.result as string
      );
      if (primersResult.primers.length === 0) {
        setSubmiting(false);
        toast.error(
          "Não foi possível obter primers... Sequência muito Pequena",
          {
            position: toast.POSITION.BOTTOM_CENTER,
          }
        );
        return;
      }
      history.push(`/primers?primers=${JSON.stringify(primersResult)}`);
    };
    fileToSubmit && fileReader.readAsText(fileToSubmit);
  };

  const submitText = async () => {
    const primersResult = await predictPrimersFromFastaGene(textToSubmit);
    if (primersResult.primers.length === 0) {
      setSubmiting(false);
      toast.error("Não foi possível obter primers... Sequência muito Pequena", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    history.push(`/primers?primers=${JSON.stringify(primersResult)}`);
  };

  const handleSubmitButtonClick = async () => {
    setSubmiting(true);
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
      {submiting ? (
        <ReactLoading
          type={"cylon"}
          color={"#112d4e"}
          height={100}
          width={100}
        />
      ) : (
        <SubmitPrimersButton
          available={fileToSubmit || textToSubmit ? true : false}
          onClick={handleSubmitButtonClick}
        />
      )}

      <ToastContainer />
    </HomePageContainer>
  );
};

export default HomePage;
