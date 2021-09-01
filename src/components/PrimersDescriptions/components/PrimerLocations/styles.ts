import styled from "styled-components";

export const PrimersLocationsContainer = styled.div`
  background-color: #3f72af;
  width: 95%;
  height: 62px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  color: #fff;

  .low-opacity {
    opacity: 0.6;
  }

  #title-container {
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  #sequence-and-locations {
    margin-left: 5px;
    overflow-x: scroll;
    width: 99%;
  }

  .foward {
    background-color: #1b7233;
    color: #000;
  }

  .reverse {
    background-color: #206a5d;
    color: #000;
  }
`;
