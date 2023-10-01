import { FC, ReactElement } from "react";
import { IButtonProps } from "./types";
import Link from "next/link";

export const Button: FC<IButtonProps> = ({
  children,
  loading,
  href,
  disabled,
  ...props
}): ReactElement => {
  if (href && !disabled) {
    return (
      <Link href={href}>
        <button {...props}>{loading ? loading : children}</button>
      </Link>
    );
  }
  return <button {...props}>{loading ? loading : children}</button>;
};
