import * as React from "react";

/**
 * Labelled form control — text input, textarea or select — for enquiry,
 * admission and volunteer-registration forms. Handles label, required mark,
 * hint and error states.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label */
  label?: string;
  /** Helper text below the field */
  hint?: string;
  /** Error message — switches the field to its invalid style */
  error?: string;
  /** Mark as required (adds a red asterisk) */
  required?: boolean;
  /** Which control to render. @default "input" */
  as?: "input" | "textarea" | "select";
  /** Options for the select variant */
  options?: Array<string | { value: string; label: string }>;
}

export declare function Input(props: InputProps): JSX.Element;
