import styled from "styled-components/macro";

const colorText = "#1D1F22";
const primaryColor = "#5ECE7B";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
  gap: 2.5rem;
`;

export const ImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  width: 5rem;
  height: 5rem;
  margin: 0rem 0rem 2rem 6rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
`;

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.div`
  width: 38rem;
  height: 32rem;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 32rem;
  object-fit: contain;
`;

export const InfoContainer = styled.section``;

export const ProductTitle = styled.div``;

export const Brand = styled.h1`
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 27px;
  color: ${colorText};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 27px;
  color: ${colorText};
`;

export const SizeContainer = styled.div`
  margin-top: 2.688rem;
`;

export const SizeTitle = styled.h4`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 18px;
  color: ${colorText};
`;

export const SizeButton = styled.button`
  width: 63px;
  height: 45px;
  background-color: transparent;
  border: 1px solid ${colorText};
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  margin-right: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${colorText};
    color: white;
  }
`;

export const CartButton = styled.button`
  width: 18.25rem;
  height: 3.25rem;
  background-color: ${primaryColor};
  padding: 16px, 32px, 16px, 32px;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  line-height: 19.2px;
  text-align: center;
  margin-top: 20px;
`;

export const PriceContainer = styled.div`
  margin-top: 2.25rem;
`;

export const PriceTitle = styled.h4`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 18px;
  color: ${colorText};
`;

export const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 18px;
  color: ${colorText};
  margin-top: 10px;
`;
