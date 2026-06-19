import * as React from "react";

/**
 * Soft, warm surface container — the base for program tiles, info panels,
 * testimonials and stats. Rounded 16px, hairline border, gentle forest-tinted shadow.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background tone. @default "default" */
  tone?: "default" | "leaf" | "dark";
  /** Shadow depth. @default "card" */
  elevation?: "flat" | "card" | "raised";
  /** Add hover-lift affordance for clickable cards */
  interactive?: boolean;
  /** Inner padding. @default "md" — use "none" for full-bleed media cards */
  padding?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
