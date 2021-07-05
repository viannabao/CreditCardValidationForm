import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";

import Router from "./router";

test("open and close menu", () => {
  render(<Router />);

  const headerBanner = screen.getByRole("banner");
  const { getByText } = within(headerBanner);
  const leftClick = { button: 0 };

  // click the menu icon to open the menu
  fireEvent.click(screen.getByTestId("menu-icon"), leftClick);

  // check that the header content becomes Menu
  expect(getByText("Menu")).toBeInTheDocument();

  // click the menu icon again to close the menu
  fireEvent.click(screen.getByTestId("menu-icon"), leftClick);

  // check that the header content becomes Register Card Form
  expect(getByText("Register Card Form")).toBeInTheDocument();
});

test("click menu item to close the menu", async () => {
  render(<Router />);

  const headerBanner = screen.getByRole("banner");
  const { getByText } = within(headerBanner);
  const leftClick = { button: 0 };

  // click the menu icon to open the menu
  fireEvent.click(screen.getByTestId("menu-icon"), leftClick);

  // check that the header content becomes Menu
  expect(getByText("Menu")).toBeInTheDocument();

  // click the menu item
  fireEvent.click(screen.getByRole("link"), leftClick);

  // check that the header content becomes Register Card Form
  expect(screen.getByText("Register Card Form")).toBeInTheDocument();
});
