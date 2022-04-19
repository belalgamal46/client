import styled from "styled-components/macro";

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 0.3fr));
  grid-template-rows: repeat(auto-fit, minmax(26.75rem, 1fr));
  grid-column-gap: 8.5rem;
  grid-row-gap: 6.438rem;
  justify-content: start;
  padding: 6rem;
`;
