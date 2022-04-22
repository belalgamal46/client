/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../nav/index";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";
import {
  Button,
  Image,
  Container,
  GalleryContainer,
  MainImage,
  ProductImage,
  ImagesContainer,
  InfoContainer,
  ProductTitle,
  Brand,
  Title,
  SizeContainer,
  SizeTitle,
  SizeButton,
  CartButton,
  PriceContainer,
  PriceTitle,
  Price,
} from "./styles/product";

class Product extends Component {
  constructor(props) {
    super(props);
    this.props.getProduct(this.props.match.params.id);
    this.currencyHandler = this.currencyHandler.bind(this);
  }

  currencyHandler(product) {
    switch (this.props.currentCurrency) {
      case "GBP":
        return product?.prices[1];
      case "AUD":
        return product?.prices[2];
      case "JPY":
        return product?.prices[3];
      case "RUB":
        return product?.prices[4];

      default:
        return product?.prices[0];
    }
  }

  render() {
    const { product } = this.props;
    const firstImage = product?.gallery ? product?.gallery[0] : "";
    return (
      <>
        <NavBar />
        <Container>
          <ImagesContainer>
            <GalleryContainer>
              {product.gallery?.map((imageURL) => {
                return (
                  <Button key={imageURL}>
                    <Image src={imageURL} alt={this.props.product.name} />
                  </Button>
                );
              })}
            </GalleryContainer>
            <MainImage>
              <ProductImage src={firstImage} alt={firstImage} />
            </MainImage>
          </ImagesContainer>
          <InfoContainer>
            <ProductTitle>
              <Brand>{product.brand}</Brand>
              <Title>{product.name}</Title>
            </ProductTitle>

            <SizeContainer>
              <SizeTitle>SIZE:</SizeTitle>
              {product?.attributes
                ? product?.attributes[0].items.map((item) => {
                    return <SizeButton key={item.id}>{item.value}</SizeButton>;
                  })
                : console.log("shit")}
            </SizeContainer>

            <PriceContainer>
              <PriceTitle>PRICE:</PriceTitle>
              <Price>
                {product?.prices
                  ? this.currencyHandler(product).currency.symbol
                  : ""}
                {product?.prices ? this.currencyHandler(product).amount : ""}
              </Price>
            </PriceContainer>

            <CartButton>ADD TO CART</CartButton>
          </InfoContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state);
  return {
    product: state.product.product,
    currentCurrency: state.currencies.currentCurrency,
  };
};

export default connect(mapStateToProps, { getProduct })(withRouter(Product));
