import AuthService from "@/core/services/auth.service";
import { routeTree } from "@/routeTree.gen";
import { useAuth } from "@/shared/hooks/useAuth";
import { fakeBackend } from "@/shared/utils/fakeBackend";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { container } from "tsyringe";

container.registerSingleton(AuthService);

const router = createRouter({ routeTree, context: { auth: { isAuthenticated: undefined } } });

fakeBackend();

const App = () => {
  const { authState } = useAuth();
  const isAuthenticated = authState.isAuthenticated;
  const context: RouterContext = {
    auth: {
      isAuthenticated,
    },
  };
  return <RouterProvider router={router} context={context} />;
};
export default App;
