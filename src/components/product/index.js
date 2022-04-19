import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../nav/index";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.props.getProduct(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <>
        <NavBar />
        <section></section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

export default connect(mapStateToProps, { getProduct })(withRouter(Product));
