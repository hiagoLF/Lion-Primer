import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FileReceiver from "./components/FileReceiver";
import HomeHeader from "./components/HomeHeader";
import SubmitPrimersButton from "./components/SubmitPrimersButton";

import { HomePageContainer } from "./styles";

const HomePage: React.FC = () => {
   const [fileToSubmit, setFileToSubmit] = useState<Blob | undefined>(
      undefined
   );
   const [textToSubmit, setTextToSubmit] = useState<string>("");

   const history = useHistory();

   const submitFile = () => {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
         console.log(event.target?.result);
      };
      fileToSubmit && fileReader.readAsText(fileToSubmit);
   };

   const submitText = () => {
      console.log(textToSubmit);
      console.log(
         history.push("/primers", {
            mainSequence: "AACGTGACTAGCTAGCCAHCTAHCTAACTHCTHATCHATCHATCHTC",
            geneName: "Myosin portion 3",
            primers: {
               forwardPrimers: [
                  {
                     primerSequence: "CACTAGCTAGCTAGCTAGCTACTA",
                     inicitalPosition: 10,
                     finalPosition: 15,
                  },
                  {
                     primerSequence: "CACTAGCTAGCTAGCTAGCTACTA",
                     inicitalPosition: 60,
                     finalPosition: 90,
                  },
               ],
               reversePrimers: [
                  {
                     primerSequence: "CACTAGCTAGCTAGCTAGCTACTA",
                     inicitalPosition: 1,
                     finalPosition: 20,
                  },
                  {
                     primerSequence: "CACTAGCTAGCTAGCTAGCTACTA",
                     inicitalPosition: 15,
                     finalPosition: 30,
                  },
               ],
            },
         })
      );
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
