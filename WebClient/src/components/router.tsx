import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Form from "./pages/form";
import { Colour } from "../helpers/constants";

interface IProps {
  menuOpen?: any;
}

const HeaderBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Colour.primary};
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = styled(Icon)`
  cursor: pointer;
  padding: 10px;
  color: white;
`;

const PageTitle = styled.h1`
  margin-top: 5px;
  color: white;
  font-family: "Lobster";
  font-weight: 100;
`;

const Placeholder = styled.div`
  width: 40px;
`;

const Navigation = styled.nav`
  height: 100vh;
  background-color: ${Colour.primary};
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 1000;
  width: ${(props: IProps) => (props.menuOpen ? "100%" : "0")};
  transition: width 0.8s, background-color 0.8s linear;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const ItemLink = styled(Link)`
  display: flex;
  line-height: 3rem;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  &:hover,
  &:active {
    color: white;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("Register Card Form");

  // Handle open/close menu
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle menu item clicked and header text changes
  const menuItemClicked = (event: any) => {
    handleClick();
    const target = event.target as HTMLHeadElement;
    setTitle(target.innerText);
  };

  return (
    <BrowserRouter>
      <HeaderBar role="banner">
        <MenuIcon
          link
          name={menuOpen ? "angle left" : "bars"}
          size="big"
          data-testid="menu-icon"
          onClick={handleClick}
        />
        <PageTitle data-testid="page-title">
          {menuOpen ? "Menu" : title}
        </PageTitle>
        <Placeholder></Placeholder>
      </HeaderBar>

      <Navigation role="navigation" menuOpen={menuOpen}>
        <List>
          <li>
            <ItemLink onClick={menuItemClicked} to="/" role="link">
              Register Card Form
            </ItemLink>
          </li>
        </List>
      </Navigation>
      <Switch>
        <Route path="/">
          <Form />
        </Route>
        <Route path="*">
          <h1>Page could not be found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Menu;
