import AuthService from "@/core/services/auth.service";
import { useMemo, useSyncExternalStore } from "react";
import { container } from "tsyringe";

export const useAuth = () => {
  const authService = useMemo(() => container.resolve(AuthService), []);

  const authState = useSyncExternalStore(
    (callback) => {
      const subscription = authService.getAuthState().subscribe(() => callback());
      return () => subscription.unsubscribe();
    },
    () => authService.currentUserValue,
  );

  return {
    authState,
    login: authService.login.bind(authService),
    logout: authService.logout.bind(authService),
  };
};
