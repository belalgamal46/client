import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../components/nav";
import Products from "../../components/products";
import { Title } from "./styles/clothes";
import { FirstLetterUpperCase } from "../../utils";

class Clothes extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        <NavBar />
        <Title>{FirstLetterUpperCase(categories[1]?.name)}</Title>
        <Products location="/clothes" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps)(Clothes);
