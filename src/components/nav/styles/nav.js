import styled from "styled-components/macro";
import { NavLink as Link } from "react-router-dom";

const primary = "#5ECE7B";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1.5rem 6rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid
    ${({ location }) =>
      location.location === location.path ? primary : "none"};
  padding: 1.5rem;
  font-weight: 600;
  color: ${({ location }) =>
    location.location === location.path ? primary : "#000"};
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-content: center; */
`;

export const NavBtn = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  margin-left: 10px;
  color: black;
`;
