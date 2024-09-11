interface Link {
  label: string;
  href: string;
  className?: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface RouterContext {
  auth: {
    isAuthenticated: boolean | undefined;
  };
}

interface FormErrors {
  username?: boolean;
  password?: boolean;
  message?: null | string;
}
