import * as React from "react";

/**
 * Section header lockup — uppercase eyebrow with a leaf rule, bold title,
 * and an optional intro line. The primary way to open every page section.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase label above the title */
  eyebrow?: string;
  /** Main heading text */
  title: React.ReactNode;
  /** Optional supporting paragraph */
  intro?: React.ReactNode;
  /** Alignment. @default "left" */
  align?: "left" | "center";
  /** Title size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Use light text for placement on forest-green sections */
  onDark?: boolean;
  /** Heading level to render. @default "h2" */
  as?: "h1" | "h2" | "h3";
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
