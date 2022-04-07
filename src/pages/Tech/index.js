import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../components/nav";
import Products from "../../components/products";
import { Title } from "./styles/tech";
import { FirstLetterUpperCase } from "../../utils";

class Tech extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <NavBar />
        <Title>{FirstLetterUpperCase(categories[2]?.name)}</Title>
        <Products location="/tech" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps)(Tech);
