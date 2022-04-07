import React, { Component } from "react";
import { connect } from "react-redux";
import { DropDown, DropDownMenu, CurrContainer } from "./styles/dropdown";
import { getCurrencies, setCurrency } from "../../actions/currencyActions";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.props.getCurrencies();
  }

  render() {
    return (
      <DropDown>
        <DropDownMenu>
          {this.props.curr.map((curr) => {
            return (
              <CurrContainer
                key={curr.label}
                onClick={(e) => {
                  console.log(e);
                  this.props.setCurrency(curr.label);
                }}
              >
                <span>{curr.symbol}</span>
                <span>{curr.label}</span>
              </CurrContainer>
            );
          })}
        </DropDownMenu>
      </DropDown>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state.currencies);
  return {
    curr: state.currencies.curr,
    currentCurrency: state.currencies.currentCurrency,
  };
};

export default connect(mapStateToProps, { getCurrencies, setCurrency })(
  Dropdown
);
