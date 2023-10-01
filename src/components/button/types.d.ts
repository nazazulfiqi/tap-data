import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: string;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}
