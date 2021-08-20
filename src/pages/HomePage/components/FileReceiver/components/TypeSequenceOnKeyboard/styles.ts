import styled from "styled-components";

export const TypeSequenceOnKeyboardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   span {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      opacity: 0.7;
   }

   textarea {
      width: 304px;
      height: 244px;
      background-color: #dbe2ef;
      border: 1px solid rgba(17, 45, 78, 0.5);
      outline: none;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 4px #000;
      columns: none;
      white-space: pre;
      overflow-wrap: normal;
      overflow: hidden;
   }
`;
