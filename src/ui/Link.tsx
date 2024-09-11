import { Link as TSLink } from "@tanstack/react-router";
import clsx from "clsx";

const Link = ({ label, href, className }: Link) => {
  return (
    <TSLink to={href} className={clsx("hover:underline [&.active]:underline", className)}>
      {label}
    </TSLink>
  );
};

export default Link;
