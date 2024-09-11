import { useAuth } from "@/shared/hooks/useAuth";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/shared/route";
import Link from "@/ui/Link";
import { FC } from "react";

const Navigation: FC = () => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;
  return (
    <ol className="flex flex-col gap-2 lg:flex-row">
      {isAuthenticated
        ? PRIVATE_ROUTES.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} label={label} />
            </li>
          ))
        : PUBLIC_ROUTES.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} label={label} />
            </li>
          ))}
    </ol>
  );
};

export default Navigation;
