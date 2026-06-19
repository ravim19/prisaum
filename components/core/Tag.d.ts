import * as React from "react";

/**
 * Small pill label for program categories, admission status, and metadata.
 * Soft variant by default; `dot` adds a status dot for live states.
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "leaf" */
  tone?: "leaf" | "success" | "warning" | "danger" | "info" | "neutral";
  /** Fill style. @default "soft" */
  variant?: "soft" | "solid" | "outline";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Leading icon node */
  icon?: React.ReactNode;
  /** Show a status dot before the label */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
