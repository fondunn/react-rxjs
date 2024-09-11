import AboutPage from "@/pages/about.page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: () => <AboutPage />,
});
