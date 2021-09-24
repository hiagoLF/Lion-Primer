import styled from "styled-components";

type PrimersDescriptionsContainerType = {
  hitEffect: boolean;
};

export const PrimersDescriptionsContainer = styled.div<PrimersDescriptionsContainerType>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  animation-name: ${({hitEffect}) => hitEffect ? 'hitUp' : ''};
  animation-duration: 200ms;
`;
