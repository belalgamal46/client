import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/categoriesActions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
  }

  render() {
    return (
      <main>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Products STATE", state.categories.products);
  return {
    products: state.categories.products,
  };
};

export default connect(mapStateToProps, { getProducts })(Products);
