import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ children, ...props }: Props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx("rounded-md bg-indigo-500 text-stone-50 hover:bg-indigo-500/80", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
