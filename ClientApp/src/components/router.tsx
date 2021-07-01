import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Form from "./pages/form";

interface IProps {
  menuOpen?: any;
}

interface IMenuItem {
  name: string;
  url: string;
  component: any;
}

const HeaderBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = styled(Icon)`
  cursor: pointer;
  padding: 10px;
  color: white;
`;

const PageTitle = styled.h2`
  margin-top: 10px;
  color: white;
`;

const Placeholder = styled.div`
  width: 40px;
`;

const Navigation = styled.nav`
  height: 100vh;
  background-color: black;
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

const MenuItems: Array<IMenuItem> = [
  { name: "Register Credit Card", url: "/", component: <Form /> },
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("Register Card Form");
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const menuItemClicked = (event: any) => {
    handleClick();
    const target = event.target as HTMLHeadElement;
    setTitle(target.innerText);
  };

  return (
    <BrowserRouter>
      <HeaderBar>
        <MenuIcon
          link
          name={menuOpen ? "angle left" : "bars"}
          size="big"
          onClick={handleClick}
        />
        <PageTitle>{menuOpen ? "Menu" : title}</PageTitle>
        <Placeholder></Placeholder>
      </HeaderBar>

      <Navigation menuOpen={menuOpen}>
        <List>
          {MenuItems.map((item) => (
            <li>
              <ItemLink onClick={menuItemClicked} to={item.url}>
                {item.name}
              </ItemLink>
            </li>
          ))}
        </List>
      </Navigation>
      <div className="pages">
        <Switch>
          {MenuItems.map((item) => (
            <Route path={item.url}>{item.component}</Route>
          ))}
          <Route path="*">
            <h1>Page could not be found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Menu;
