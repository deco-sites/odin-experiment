import { icons } from "@stone-payments/odin-icons";

export type IconsNames = keyof typeof icons;

export interface ButtonProps {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */

  label?: string;
  color?:
    | "primary"
    | "secondary"
    | "primaryNeon"
    | "ghost"
    | "transparent"
    | "ton";
  linkPathname?: string;
  linkTarget?: "_blank" | "_self" | "_parent" | "_top";
  linkQuery?: string;
  linkHash?: string;
  linkHref?: string;
  iconName?: IconsNames;
  iconPosition?: "left" | "right";
  link?: {
    href?: string;
  };
  size?: string;
  uiStyleVariant?: "link" | "button";

  /* Internal props */
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
  fullWidth?: boolean;
}
