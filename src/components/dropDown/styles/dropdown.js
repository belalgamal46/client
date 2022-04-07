import styled from "styled-components/macro";

const primary = "#5ECE7B";

export const DropDown = styled.div`
  position: relative;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  right: 0;
  width: 114px;
  top: calc(100% + 0.25px);
  background-color: white;
  padding: 0.75rem;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const CurrContainer = styled.div`
  width: 100%;
  height: 1.813rem;
  padding: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 21px;
  cursor: pointer;
  &:nth-child(5) {
    margin-bottom: 0;
  }
  &:hover {
    background-color: rgba(94, 206, 123);
    color: white;
  }
`;
