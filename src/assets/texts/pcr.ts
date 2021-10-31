const undertandingPCR = `## Como funciona uma PCR

  A Reação em Cadeia da Polimerase, do inglês *Polymerase Chain Reaction* (PCR), é uma ferramenta amplamente utilizada em trabalhos envolvendo biologia molecular como diagnóstico de doenças, sequenciamento de DNA, clonagem de genes, entre outros. O objetivo central desta tecnologia é a escolha de uma região específica do DNA e a geração de milhões de cópias dela.
  
  O procedimento é realizado em um equipamento laboratorial chamado termociclador, que tem o trabalho de aplicar ciclos repetidos de diferentes temperaturas na solução de PCR. Tal solução tem como principais ingredientes o DNA molde que terá um dos seus trechos multiplicado em diversas cópias, primers que se ligam ao DNA para promover o início da reação, nucleotídeos que serão as peças para construção das novas cópias de DNA e uma enzima chamada de Taq polimerase que fará o trabalho de construir essas novas cópias.

  ### Ingredientes:
  - DNA molde
  - Primers iniciadores
  - Nucleotídeos: Adenina, Timina, Citosina e Guanina (A, T, C e G)
  - Taq Polimerase
  
  Os ingredientes misturados são colocados no termociclador que inicialmente aplicam uma temperatura de 94°C para que haja separação entre as fitas do DNA molde em um processo chamado de desnaturação. Agora, o que antes era chamado de DNA fita dupla dá origem a dois DNAs de fita simples.
  
  ![Separação das Fitas](https://raw.githubusercontent.com/hiagoLF/Lion-Primer/main/src/assets/images/denaturation.png)
  - Processo de Desnaturação

  A segunda etapa é chamada de hibridização, onde os primers se ligam a suas regiões específicas no DNA. Para que isso ocorra, o equipamento diminui a temperatura para uma faixa de vai de 40 a 70 °C sendo chamada de temperatura de anelamento. A propósito, a temperatura de anelamento normalmente corresponde entre 3 e 5 ºC abaixo da temperatura de melting. A temperatura de melting corresponde a temperatura em que metade das fitas estão desnaturadas e a outra metade, pareadas.
  
  ![Hibridização](https://raw.githubusercontent.com/hiagoLF/Lion-Primer/main/src/assets/images/hybridisation.png)
  - Processo de Hibridização

  A terceira etapa é chamada de alongamento pois é nela em que um novo DNA fita dupla surge. Para que isso ocorra, o equipamento eleva a temperatura para 72 °C que é ideal para o trabalho da Taq Polimerase. A enzima faz o trabalho de recolher cada nucleotídeo presente na solução e inserir no seu devido lugar do DNA. 
  
  ![Alongamento](https://github.com/hiagoLF/Lion-Primer/blob/main/src/assets/images/elongation.png?raw=true)
  - Processo de Alongamento


  Após isso, o termociclador repete tudo denovo, aplicando temperaturas favoráveis para a desnaturação, hibridização e alongamento. O ciclo se repete entre 20 e 40 vezes, até que haja uma quantidade de DNA suficiente para o trabalho desejado.
  
  ![Termociclador](https://github.com/hiagoLF/Lion-Primer/blob/main/src/assets/images/thermocycler.jpg?raw=true)
  - Termociclador


  Uma coisa bastante curiosa envolve a enzima Taq polimerase pois sabe-se que proteínas sofrem desnaturação em altas temperaturas, perdendo sua função. Sabendo que a enzima Taq polimerase é só mais uma proteína podemos chegar à questão: Como ela suporta as altas temperaturas a que são submetidas na PCR? Por um bom tempo, a PCR foi um procedimento bastante oneroso pois a polimerase utilizada era um tipo comum e que se degradava durante o processo, obrigando o pesquisador a abrir o equipamento e adicionar mais solução de enzimas polimerases na solução de PCR. Tudo mudou quando se descobriu a bactéria *Thermus aquaticus*, organismo que vive em fontes termais, locais que possuem água aquecida por processos de geotermia ou por ações vulcânicas. Tais locais, portanto, possuem altas temperaturas e, dessa forma, os organismos habitantes devem possuir alta resistência ao calor. Descobriu-se portanto uma nova polimerase termoestável (Resistente a temperatura) nessa bactéria, que foi extraída, estudada, nomeada de Taq polimerase e atualmente é indispensável para qualquer procedimento de PCR.
  
  ![Fonte Termal](https://github.com/hiagoLF/Lion-Primer/blob/main/src/assets/images/termal.jpg?raw=true)
  - Fonte Termal


  ### Referências
  
  - KADRI, Karim. Polymerase Chain Reaction (PCR): principle and applications. Synthetic Biology - New Interdisciplinary Science, [S.L.], v. -, n. 9, 12 fev. 2020. IntechOpen.
  - GARIBYAN, Lilit; AVASHIA, Nidhi. Polymerase Chain Reaction. Journal Of Investigative Dermatology, [S.L.], v. 133, n. 3, p. 1-4, mar. 2013. Elsevier BV.
  - KASVI. História e evolução da técnica de PCR. Disponível em: https://kasvi.com.br/historia-e-evolucao-da-tecnica-de-pcr/. Acesso em: 30 out. 2021.
  - BLOG RIO QUENTE. O que são águas termais e quais são os seus benefícios? Disponível em: https://www.rioquente.com.br/blog/o-que-sao-aguas-termais-e-quais-sao-os-seus-beneficios. Acesso em: 30 out. 2021.
  `;

export default undertandingPCR;
