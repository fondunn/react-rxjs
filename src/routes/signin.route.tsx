import SignInPage from "@/pages/sign-in.page";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  beforeLoad: (ctx) => {
    if (ctx.context?.auth?.isAuthenticated) {
      throw redirect({
        to: "/dashboard",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => <SignInPage />,
});
