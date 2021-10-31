import styled from "styled-components";

export const LearnPCRContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  padding-bottom: 100px;

  #post-area {
    max-width: 800px;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      margin-top: 50px;
    }

    p {
      margin-top: 30px;
      text-align: left;
    }

    h3 {
      width: 100%;
      margin-top: 50px;
    }

    li {
      width: 100%;
    }

    ul {
      width: 100%;
      margin-left: 37px;
      margin-top: 10px;
    }

    img {
      width: 100%;
    }
  }
`;
