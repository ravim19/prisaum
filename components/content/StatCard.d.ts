import * as React from "react";

/**
 * Impact statistic — a large brand-green number with a small caption.
 * Used in impact strips and the "Whom We Serve" band.
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number / headline value */
  value: React.ReactNode;
  /** Small suffix appended to the value, e.g. "+", "%" */
  suffix?: string;
  /** Caption below the value */
  label?: React.ReactNode;
  /** Alignment. @default "left" */
  align?: "left" | "center";
  /** Light treatment for forest-green sections */
  onDark?: boolean;
}

export declare function StatCard(props: StatCardProps): JSX.Element;
