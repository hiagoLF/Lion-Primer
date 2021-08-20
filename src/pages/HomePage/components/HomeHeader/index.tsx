import React from "react";
import ImportantTitle from "../../../../components/ImportantTitle";

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
   return (
      <ImportantTitle>
         <h1>Primers para seu Gene</h1>
         <h2 style={{ opacity: 0.9 }}>
            Para começar, digite a sequência do seu gene ou escolha o
            arquivofasta no seu computador
         </h2>
      </ImportantTitle>
   );
};

export default HomeHeader;
