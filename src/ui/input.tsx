import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={[
        "rounded-md border-2 p-2 outline-0 invalid:border-red-400/90 focus:border-stone-900 aria-[invalid=true]:border-red-400/90",
        props.className,
      ].join(" ")}
    />
  );
};

export default Input;
