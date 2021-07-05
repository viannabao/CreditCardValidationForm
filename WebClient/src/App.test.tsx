import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the register card form page initially", () => {
  render(<App />);
  expect(screen.getByTestId("page-title")).toBeInTheDocument();
  expect(screen.getByRole("main")).toBeInTheDocument();
});
