import * as React from "react";

/**
 * Primary call-to-action button in the Prisaum Seva brand.
 * Pill-shaped, friendly weight. Use `primary` for main actions, `support`
 * (marigold) for donate/volunteer CTAs, `secondary` for outline actions.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "support" | "secondary" | "ghost" | "onDark";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Icon node rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label */
  iconRight?: React.ReactNode;
  /** Stretch to fill container width */
  fullWidth?: boolean;
  /** Render as an anchor when set */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
