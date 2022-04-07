import React, { Component } from "react";
import {
  Container,
  ImageContainer,
  Image,
  PriceContainer,
  Symbol,
  Amount,
} from "./styles";

class Product extends Component {
  render() {
    return (
      <Container>
        <ImageContainer>
          <Image src="" alt="" />
        </ImageContainer>
        <PriceContainer>
          <Symbol>symbol</Symbol>
          <Amount>amount</Amount>
        </PriceContainer>
      </Container>
    );
  }
}

export default Product;
