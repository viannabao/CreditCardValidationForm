import React from "react";
import { useForm } from "react-hook-form";
import { Header, Form, Button, Divider, Segment } from "semantic-ui-react";
import styled from "styled-components";

interface IFormInputs {
  creditCardNumber: string;
  cvc: string;
  expiry: boolean;
}

const creditCardNumberRegex: RegExp =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const cvcRegex: RegExp = /[0-9]{3}/;
const expiryRegex: RegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

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

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

const CreditCardValidationForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<IFormInputs>();

  React.useEffect(() => {
    setFocus("creditCardNumber");
  }, [setFocus]);

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <FormContainer>
        <FormCard>
          <Header as="h3">Welcome John Doe</Header>
          <Divider clearing />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field error={!!errors.creditCardNumber}>
              <label>Credit Card Number</label>
              <input
                {...register("creditCardNumber", {
                  required: "Credit card number is required",
                  pattern: {
                    value: creditCardNumberRegex,
                    message: "Card number is not valid",
                  },
                })}
                placeholder="0000-0000-0000-0000"
                inputMode="numeric"
                type="text"
              />
              {errors.creditCardNumber && (
                <ErrorMessage>{errors.creditCardNumber.message}</ErrorMessage>
              )}
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Field error={!!errors.cvc}>
                <label>CVC</label>
                <input
                  {...register("cvc", {
                    required: "CVC is required",
                    pattern: { value: cvcRegex, message: "CVC is not valid" },
                  })}
                  placeholder="000"
                  type="text"
                  maxLength={3}
                />

                {errors.cvc && (
                  <ErrorMessage>{errors.cvc.message}</ErrorMessage>
                )}
              </Form.Field>

              <Form.Field error={!!errors.expiry}>
                <label>Expiry</label>
                <input
                  {...register("expiry", {
                    required: "Expiry date is required",
                    pattern: {
                      value: expiryRegex,
                      message: "Expiry date format is not valid",
                    },
                  })}
                  placeholder="MM/YY"
                  type="text"
                  maxLength={5}
                />

                {errors.expiry && (
                  <ErrorMessage>{errors.expiry.message}</ErrorMessage>
                )}
              </Form.Field>
            </Form.Group>

            <Divider clearing />

            <Button
              type="submit"
              onClick={() => {
                setError("creditCardNumber", {});
              }}
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
