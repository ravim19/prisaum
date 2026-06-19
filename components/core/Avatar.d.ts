import * as React from "react";

/**
 * Circular avatar for volunteers, benefactors and staff. Falls back to
 * initials on a soft-green chip when no image is provided.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; omit to show initials */
  src?: string;
  /** Full name — used for initials + alt text */
  name?: string;
  /** Size. @default "md" */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Add a soft green ring */
  ring?: boolean;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
