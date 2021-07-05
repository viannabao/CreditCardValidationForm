import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Header,
  Form,
  Button,
  Divider,
  Segment,
  Message,
} from "semantic-ui-react";
import styled from "styled-components";

import TextInput from "../inputs/textInput";
import { Regex, Colour } from "../../helpers/constants";

interface IFormInputs {
  creditCardNumber: string;
  name: string;
  cvc: string;
  expiry: boolean;
}

const FormTitle = styled(Header)`
  font-family: "Lobster";
  font-weight: 100;
  color: ${Colour.primary};
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const FormCard = styled(Segment)`
  width: 70%;
  max-width: 500px;
  height: auto;
`;

const CreditCardValidationForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  // React hook form declarations
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<IFormInputs>();

  // Auto focus credit card number field initially
  React.useEffect(() => {
    setFocus("creditCardNumber");
  }, [setFocus]);

  // Dismiss the submission message
  const handleMessageDismiss = () => {
    setShowMessage(false);
  };

  // The method that invoked when submit button clicked
  const onSubmit = (data: IFormInputs) => {
    console.log(JSON.stringify({ data }));
    setShowMessage(true);
    // TODO: use axio to POST JSON.stringify({ data }) through API
  };

  return (
    <>
      <FormContainer role="main">
        <FormCard>
          {showMessage && (
            <Message
              positive
              onDismiss={handleMessageDismiss}
              header="Credit card info submitted!"
            />
          )}

          <FormTitle as="h2">Welcome John Doe</FormTitle>

          <Divider clearing />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="credit-card-number-text-input"
              label="Credit Card Number"
              error={errors.creditCardNumber}
              register={register("creditCardNumber", {
                required: "Credit card number is required",
                pattern: {
                  value: Regex.creditCardNumber,
                  message: "Card number is not valid",
                },
              })}
              placeholder="0000-0000-0000-0000"
              inputMode="numeric"
            />
            <TextInput
              id="credit-card-holder-name-text-input"
              label="Name"
              error={errors.name}
              register={register("name", {
                required: "Name is required",
                pattern: {
                  value: Regex.name,
                  message: "Name value is not valid",
                },
              })}
              placeholder="Name"
            />

            <Form.Group widths="equal">
              <TextInput
                id="credit-card-cvc-text-input"
                label="CVC"
                error={errors.cvc}
                register={register("cvc", {
                  required: "CVC is required",
                  pattern: { value: Regex.cvc, message: "CVC is not valid" },
                })}
                placeholder="000"
                maxLength={3}
              />
              <TextInput
                id="credit-card-expiry-date-text-input"
                label="Expiry (MM/YY)"
                error={errors.expiry}
                register={register("expiry", {
                  required: "Expiry date is required",
                  pattern: {
                    value: Regex.expiry,
                    message: "Expiry date format is not valid",
                  },
                })}
                placeholder="MM/YY"
                maxLength={5}
              />
            </Form.Group>

            <Divider clearing />

            <Button
              type="submit"
              onClick={() => {
                setError("creditCardNumber", {});
              }}
              aria-label="Submit"
            >
              Submit
            </Button>
          </Form>
        </FormCard>
      </FormContainer>
    </>
  );
};

export default CreditCardValidationForm;
