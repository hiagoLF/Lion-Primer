import styled from "styled-components";

export const BottomButtonsContainer = styled.div`
  width: 920px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 4px;

  #title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #buttons {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    #util-links {
      button {
        height: 41px;
        padding: 0 5px;
        border-radius: 5px;
        margin-left: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: 200ms;

        &:hover {
          opacity: 0.8;
        }
      }

      #ncbi {
        background-color: #20528e;
        color: #fff;
      }

      #primer-manager {
        background-color: #ccccfd;
        color: #000;
      }

      #in-silico-pcr {
        background-color: #3567d1;
        color: #fff;
      }
    }
  }
`;
