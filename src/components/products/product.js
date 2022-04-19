import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  ImageContainer,
  Image,
  ProductDetails,
  ProductName,
  Amount,
  Symbol,
  PriceContainer,
  CartBtn,
  Overlay,
} from "./styles/product";
import cartWhite from "../../images/VectorWhite.svg";

class Product extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `/product/${this.props.id}`;
    this.props.history.push(path);
  }

  render() {
    const { imageUrl, name, symbol, amount, alt, inStock } = this.props;
    return (
      <Container onClick={this.routeChange}>
        <CartBtn>
          <img src={cartWhite} alt="cart" />
        </CartBtn>

        <ImageContainer>
          {!inStock && <Overlay>OUT OF STOCK</Overlay>}
          <Image src={imageUrl[0]} alt={alt} inStock={inStock} />
        </ImageContainer>

        <ProductDetails inStock={inStock}>
          <ProductName>{name}</ProductName>
          <PriceContainer>
            <Symbol>{symbol}</Symbol>
            <Amount>{amount}</Amount>
          </PriceContainer>
        </ProductDetails>
      </Container>
    );
  }
}

export default withRouter(Product);
