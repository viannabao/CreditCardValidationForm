import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import CreditCardValidationForm from "./form";

test("render the user welcome text", () => {
  render(<CreditCardValidationForm />);

  // Check the user welcome text is rendered
  expect(screen.getByText(/Welcome John Doe/i)).toBeInTheDocument();
});

test("credit card number field is auto focus", () => {
  render(<CreditCardValidationForm />);

  expect(screen.getByTestId("credit-card-number-text-input")).toHaveFocus();
});

test("submit without filling anything", async () => {
  render(<CreditCardValidationForm />);

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  await waitFor(() => {
    // Require message for credit card number appears
    expect(
      screen.getByText("Credit card number is required")
    ).toBeInTheDocument();

    // Require message for name appears
    expect(screen.getByText("Name is required")).toBeInTheDocument();

    // Require message for cvc number appears
    expect(screen.getByText("CVC is required")).toBeInTheDocument();

    // Require message for expiry date appears
    expect(screen.getByText("Expiry date is required")).toBeInTheDocument();
  });
});

test("submit invalid credit card number", async () => {
  render(<CreditCardValidationForm />);

  // Enter an invalid credit card number
  fireEvent.change(screen.getByTestId("credit-card-number-text-input"), {
    target: { value: "1214154112" },
  });

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  await waitFor(() => {
    // Error message appears
    expect(screen.getByText("Card number is not valid")).toBeInTheDocument();
  });
});

test("submit invalid name", async () => {
  render(<CreditCardValidationForm />);

  // Enter an invalid credit card number
  fireEvent.change(screen.getByTestId("credit-card-holder-name-text-input"), {
    target: { value: "123" },
  });

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  await waitFor(() => {
    // Error message appears
    expect(screen.getByText("Name value is not valid")).toBeInTheDocument();
  });
});

test("submit invalid cvc number", async () => {
  render(<CreditCardValidationForm />);

  // Enter an invalid credit card number
  fireEvent.change(screen.getByTestId("credit-card-cvc-text-input"), {
    target: { value: "11" },
  });

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  await waitFor(() => {
    // Error message appears
    expect(screen.getByText("CVC is not valid")).toBeInTheDocument();
  });
});

test("submit invalid expiry", async () => {
  render(<CreditCardValidationForm />);

  // Enter an invalid credit card number
  fireEvent.change(screen.getByTestId("credit-card-expiry-date-text-input"), {
    target: { value: "23/12" },
  });

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  await waitFor(() => {
    // Error message appears
    expect(
      screen.getByText("Expiry date format is not valid")
    ).toBeInTheDocument();
  });
});

test("fill out valid credit card infomation", async () => {
  render(<CreditCardValidationForm />);

  // Enter credit card number
  fireEvent.change(screen.getByTestId("credit-card-number-text-input"), {
    target: { value: "4716660449857612" },
  });

  // Enter card holder name
  fireEvent.change(screen.getByTestId("credit-card-holder-name-text-input"), {
    target: { value: "John Doe" },
  });

  // Enter cvc number
  fireEvent.change(screen.getByTestId("credit-card-cvc-text-input"), {
    target: { value: "123" },
  });

  // Enter expiry
  fireEvent.change(screen.getByTestId("credit-card-expiry-date-text-input"), {
    target: { value: "12/23" },
  });

  // Click submit
  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText("Submit"), leftClick);

  // Check message appears
  await waitFor(() => {
    expect(screen.getByText("Credit card info submitted!")).toBeInTheDocument();
  });
});
