import React from "react";
import { Nav, NavMenu, NavLink, NavBtn, StyledImg } from "./styles/nav";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoriesActions";
import PropTypes from "prop-types";
import { FirstLetterUpperCase } from "../../utils";
import Dropdown from "../dropDown";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handelClickOutside = this.handelClickOutside.bind(this);
    this.ref = React.createRef();
  }
  state = {
    dropdown: false,
  };
  handelClickOutside(e) {
    if (this.ref.current !== e.target) {
      this.setState({ dropdown: false });
    }
  }

  componentDidMount() {
    this.props.getCategories();

    document.addEventListener("click", this.handelClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handelClickOutside);
  }

  getCategory() {
    const { location, categories } = this.props;

    return categories?.map((category) => {
      return (
        <NavLink
          to={`/${category.name}`}
          location={{
            location: location.pathname,
            path: `/${category.name}`,
            path2: `/`,
          }}
          key={category.name}
        >
          {FirstLetterUpperCase(category?.name)}
        </NavLink>
      );
    });
  }

  handleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    return (
      <header>
        <Nav>
          <NavMenu>{this.getCategory()}</NavMenu>

          <NavMenu>
            <Link to="/">
              <img src="a-logo.svg" alt="logo" />
            </Link>
          </NavMenu>

          <NavMenu>
            <NavBtn onClick={this.handleDropdown} ref={this.ref}>
              $
              <StyledImg src="arrow.svg" alt="arrowIcon" />
            </NavBtn>
            <NavBtn>
              <img src="Vector.svg" alt="" />
            </NavBtn>
            {this.state.dropdown && <Dropdown />}
          </NavMenu>
        </Nav>
      </header>
    );
  }
}

NavBar.proptype = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, { getCategories })(withRouter(NavBar));
