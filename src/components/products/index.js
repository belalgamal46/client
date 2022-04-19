import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/categoriesActions";
import Product from "./product";
import { ProductsContainer } from "./styles/products";

class Products extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.props.getProducts();
    this.currencyHandler = this.currencyHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  currencyHandler(currency, item) {
    switch (currency) {
      case "GBP":
        return item.prices[1];
      case "AUD":
        return item.prices[2];
      case "JPY":
        return item.prices[3];
      case "RUB":
        return item.prices[4];

      default:
        return item.prices[0];
    }
  }

  categoryHandler() {
    const { location, products } = this.props;
    switch (location) {
      case "/all":
        return products[0];
      case "/clothes":
        return products[1];
      case "/tech":
        return products[2];

      default:
        return products[0];
    }
  }

  render() {
    return (
      <main>
        <ProductsContainer>
          {this.categoryHandler()?.products.map((item) => {
            return (
              <Product
                key={item.id}
                imageUrl={item.gallery}
                alt={item.name}
                name={item.name}
                inStock={item.inStock}
                id={item.id}
                symbol={
                  this.currencyHandler(this.props.currentCurrency, item)
                    .currency.symbol
                }
                amount={
                  this.currencyHandler(this.props.currentCurrency, item).amount
                }
              />
            );
          })}
        </ProductsContainer>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.categories.products[0]?.products[0].prices);
  return {
    products: state.categories.products,
    currentCurrency: state.currencies.currentCurrency,
  };
};

export default connect(mapStateToProps, { getProducts })(Products);
