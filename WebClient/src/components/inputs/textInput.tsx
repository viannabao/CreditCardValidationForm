import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

interface ITextInputProps {
    id: string;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  placeholder?: string;
  inputMode?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
    maxLength?: number;
}
const ErrorMessage = styled.span`
  font-size: 12px;
  color: #9f3a38;
`;

const TextInput = (props: ITextInputProps) => {
  return (
    <Form.Field error={!!props.error}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props.register}
        id={props.id}
        data-testid={props.id}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        maxLength={props.maxLength}
        type="text"
        aria-invalid={!!props.error}
      />
      {props.error && <ErrorMessage role="alert" aria-atomic="true">{props.error.message}</ErrorMessage>}
    </Form.Field>
  );
};

export default TextInput;
