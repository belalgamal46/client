import React, { Component } from "react";
import { connect } from "react-redux";
import { Title } from "./styles/home";
import NavBar from "../../components/nav";
import Products from "../../components/products";
import { FirstLetterUpperCase } from "../../utils";

class Home extends Component {
  render() {
    const { categories } = this.props;

    return (
      <>
        <NavBar />
        <Title>{FirstLetterUpperCase(categories[0]?.name)}</Title>
        <Products path="/all" path2="/" />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps)(Home);
