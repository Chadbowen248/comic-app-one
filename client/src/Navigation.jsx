import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
width: 100%;
background-color: Tomato;
display: flex;
height: 50px;
align-items: center;
`;

const NavLink = styled(Link)`
color: white;
padding-left: 1.5em;
text-decoration: none;
font-family: 'Coda', sans-serif;
text-transform: uppercase;
font-size: 1.5em;
`;
const Navigation = () => (
  <NavigationDiv>
    <NavLink to="/">
      Collection
    </NavLink>
    <NavLink to="/search">
      Search
    </NavLink>
  </NavigationDiv>
);

export default Navigation;
