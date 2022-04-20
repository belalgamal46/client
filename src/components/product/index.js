/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../nav/index";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";
import {Button, Image, Container} from "./styles/product"

class Product extends Component {
  constructor(props) {
    super(props);
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const {product} = this.props;
    console.log("product",product);
    return (
      <>
        <NavBar />
        <section>
          <Container>
            {this.props.product.gallery?.map((imageURL) => {
              return(
              <Button>
                <Image src={imageURL} alt={this.props.product.name} key={imageURL} />
              </Button>);
            })}
          </Container>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("PRODUCT",state.product.product);
  return {
    product: state.product.product,
  };
};

export default connect(mapStateToProps, { getProduct })(withRouter(Product));
