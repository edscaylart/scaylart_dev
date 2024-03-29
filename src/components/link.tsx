/* eslint-disable @typescript-eslint/no-unsafe-argument */
import clsx from "clsx";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React from "react";

interface ILinkProps extends NextLinkProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  size?: "sm" | "base" | "lg" | "xl";
  variant?: "primary" | "link" | "icon-button";
  children?: React.ReactNode;
  external?: boolean;
  className?: string;
}

export const Link = ({
  leftIcon,
  rightIcon,
  size = "base",
  variant = "primary",
  children,
  external,
  className,
  ...restProps
}: ILinkProps) => {
  return (
    <NextLink
      className={clsx(
        "group flex w-fit items-center gap-2",
        `text-${size}`,
        {
          "hover:underline": variant === "link",
        },
        className,
      )}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...restProps}
    >
      {leftIcon && iconWithStyles(leftIcon, size)}
      {children}
      {rightIcon && iconWithStyles(rightIcon, size)}
    </NextLink>
  );
};

const iconWithStyles = (
  icon: React.ReactElement,
  size: "sm" | "base" | "lg" | "xl",
) =>
  React.cloneElement(icon, {
    className: clsx(
      "bg-background-100 p-1",
      "shadow-md rounded-md",
      "group-hover:scale-[1.2] group-hover:shadow-background-700 group-active:translate-y-[2px]",
      "transition-all duration-300 ease-out",
    ),
    size: size === "sm" ? 24 : 32,
    ...icon.props,
  });
