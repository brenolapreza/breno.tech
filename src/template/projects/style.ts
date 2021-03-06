import styled from "styled-components";

export const ContainerCard = styled.section`
  padding-top: 4rem;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;
