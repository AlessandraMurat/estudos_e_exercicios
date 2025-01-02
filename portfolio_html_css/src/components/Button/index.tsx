import React from "react";
import Link from "next/link";
import { tv } from "tailwind-variants";

interface ButtonProps {
  text: string;
  link: string;
  outlined?: boolean;
  color?: "primary" | "secondary";
}

const buttonVariants = tv({
  base: "w-full flex justify-center items-center py-4 font-semibold text-base rounded-lg border-2",
  variants: {
    color: {
      primary: "bg-primary text-black border-primary",
      secondary: "bg-transparent text-primary border-primary",
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

const Button: React.FC<ButtonProps> = ({ text, link, color }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={buttonVariants({ color: color })}
    >
      {text}
    </Link>
  );
};

export default Button;
