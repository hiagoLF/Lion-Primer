function predictPrimersFromFastaGene(fataGene: string) {
   const geneName = getGeneNameFromFasta(fataGene);
   const geneSequence = getGeneSequenceFromFasta(fataGene);
   const geneComplementarSequence =
      getDnaComplementarSequenceFrom(geneSequence);
   const reversePrimers = getFragmentsFrom(geneSequence);
   const fowardPrimers = getFragmentsFrom(geneComplementarSequence);
   return {
      geneName,
      geneSequence,
      geneComplementarSequence,
      fowardPrimers,
      reversePrimers,
   };
}

function getGeneNameFromFasta(fataGene: string) {
   const geneHeader = fataGene.split("\n")[0];
   const geneName = geneHeader.replace(">", "").trim();
   return geneName;
}

function getGeneSequenceFromFasta(fataGene: string) {
   const fastaLines = fataGene.split("\n");
   fastaLines.shift();
   const geneSequence = fastaLines.join("");
   return geneSequence;
}

function getDnaComplementarSequenceFrom(geneSequence: string) {
   const geneConvertedToArray = geneSequence.split("");
   const complementarGeneArray = geneConvertedToArray.map((nitrogenBase) => {
      switch (nitrogenBase) {
         case "A":
            return "T";
         case "T":
            return "A";
         case "G":
            return "C";
         case "C":
            return "G";
      }
   });
   complementarGeneArray.reverse();
   const complementaryGeneString = complementarGeneArray.join("");
   return complementaryGeneString;
}

function getFragmentsFrom(geneSequence: string) {
   const geneSequenceToArray = geneSequence.split("");
   const fragmentsCollection = [];

   for (
      let nitrogenBaseIndex = 0;
      nitrogenBaseIndex <= geneSequence.length - 22;
      nitrogenBaseIndex++
   ) {
      const fragments = getFragmentsStartedOnIndex(
         nitrogenBaseIndex,
         geneSequenceToArray
      );
      fragmentsCollection.push(...fragments);
   }

   return fragmentsCollection;
}

function getFragmentsStartedOnIndex(
   initialBaseIndex: number,
   geneSequenceArray: string[]
) {
   const fragmentsCollection = [];

   for (
      let finalIndex = initialBaseIndex + 17;
      finalIndex <= initialBaseIndex + 22;
      finalIndex++
   ) {
      const fragmentInformations = getFragmentInformations(
         initialBaseIndex,
         finalIndex,
         geneSequenceArray
      );
      fragmentsCollection.push(fragmentInformations);
   }

   return fragmentsCollection;
}

function getFragmentInformations(
   initialBaseIndex: number,
   finalIndex: number,
   geneSequenceArray: string[]
) {
   const fragment = geneSequenceArray.slice(initialBaseIndex, finalIndex);
   const cgContentAtFiveLastNucleotides =
      getCGcontentAtFiveLastNucleotides(fragment);

   const fragmentInformations = {
      sequence: fragment.join(""),
      positions: {
         initialNucleotidePosition: initialBaseIndex + 1,
         finalNucleotidePosition: finalIndex,
      },
      cgContentAtFiveLastNucleotides,
   };

   return fragmentInformations;
}

function getCGcontentAtFiveLastNucleotides(fragment: string[]) {
   let cgAmount = 0;
   for (
      let nitrogenBaseIndex = fragment.length - 5;
      nitrogenBaseIndex <= fragment.length;
      nitrogenBaseIndex++
   ) {
      if (
         fragment[nitrogenBaseIndex] === "C" ||
         fragment[nitrogenBaseIndex] === "G"
      ) {
         cgAmount++;
      }
   }
   return cgAmount;
}

export default predictPrimersFromFastaGene;
