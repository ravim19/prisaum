import * as React from "react";

/**
 * The signature tile for a vocational / therapeutic programme: an icon chip,
 * title, short description and an optional "learn more" affordance. Becomes a
 * link when `href` is set (hover-lifts).
 */
export interface ProgramCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Icon — an image URL (brand spot icon) or an inline SVG node */
  icon?: string | React.ReactNode;
  /** Programme name */
  title: React.ReactNode;
  /** One- or two-line description */
  description?: React.ReactNode;
  /** Optional <Tag> element for the category */
  tag?: React.ReactNode;
  /** Link target — turns the card into an anchor */
  href?: string;
  /** Call-to-action label. @default "Learn more" */
  cta?: string;
}

export declare function ProgramCard(props: ProgramCardProps): JSX.Element;
