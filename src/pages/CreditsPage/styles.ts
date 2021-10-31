import styled from "styled-components";

export const CreditsPageContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 100px;

  #profile-container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 10px;

    hr {
      height: 3px;
      color: #000;
    }

    img {
      height: 200px;
      width: 200px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    h2 {
    }
    h3 {
      margin-bottom: 10px;
    }
    h4 {
      opacity: 0.8;
    }
  }
`;
