import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: rgba(245, 245, 245, 0.6);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;
  font-family: "Questrial", sans-serif;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #d9ba89;
  padding: 10px 22px;
  color: black;
  border: none;
  outline: none;
  cursor: pointern;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Questrial", sans-serif;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
