import styled from "styled-components/macro";

const primaryColor = "#5ECE7B";
const outOfStock = "#8D8F9A";
const textColor = "#1D1F22";
const fontSize = "18px";
const lineHieght = "160%";

export const Container = styled.div`
  display: grid;
  row-gap: 1.5rem;
  padding: 1rem;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
    transform: scale(1.02, 1.02);
    button {
      display: block;
      border: none;
      border-radius: 100px;
      position: absolute;
      background-color: ${primaryColor};
      padding: 0.7rem;
      left: 78.5%;
      top: 72%;
      cursor: pointer;
    }
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const Overlay = styled.div`
  position: relative;
  top: 50%;
  font-size: 1.5rem;
  color: ${outOfStock};
  font-weight: 400;
  line-height: 38.4px;
  z-index: 9;
`;

export const Image = styled.img`
  width: 22rem;
  height: 20.6rem;
  object-fit: contain;
  opacity: ${({ inStock }) => {
    return !inStock ? "0.5" : "1";
  }};
`;

export const PriceContainer = styled.div`
  line-height: 160%;
`;

export const ProductDetails = styled.div`
  padding: 0px 16px;
  color: ${({ inStock }) => {
    return !inStock ? `${outOfStock}` : `${textColor}`;
  }};
  font-size: ${fontSize};

  line-height: ${lineHieght};
`;

export const ProductName = styled.h3`
  font-weight: 300;
`;

export const Symbol = styled.span`
  font-weight: 500;
`;

export const Amount = styled.span`
  font-weight: 500;
`;

export const CartBtn = styled.button`
  display: none;
  z-index: 10;
`;
