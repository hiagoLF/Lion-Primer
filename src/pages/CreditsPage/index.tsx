import React from "react";
import { CreditsPageContainer } from "./styles";
import hiagoImage from '../../assets/profile/hiago.jpeg'
import manoelImage from '../../assets/profile/manoel.jpeg'

// import { Container } from './styles';

const CreditsPage: React.FC = () => {
  return (
    <CreditsPageContainer>
      <div id="fake-space" />

      <div id="profile-container">
        <img src={hiagoImage} alt="Hiago" />
        <h2>Hiago Leão Ferreira</h2>
        <h3>Desenvolvedor</h3>
        <h4>Graduando em Biotecnologia</h4>
        <h4>Universidade Federal da Bahia - UFBA</h4>
      </div>

      <div id="profile-container">
        <img src={manoelImage} alt="Manoel" />
        <h2>Manoel Neres Júnior</h2>
        <h3>Orientador</h3>
        <h4>Graduado em Biotecnologia</h4>
        <h4>Universidade Federal da Bahia - UFBA</h4>
        <hr />
        <h4>Metre e Doutor em Biologia e Biotecnologia de MIcrorganismos</h4>
        <h4>Universidade de Santa Cruz - UESC</h4>
      </div>
    </CreditsPageContainer>
  );
};

export default CreditsPage;
