import { LOCAL_STORAGE_USER_KEY } from "@/shared/constants";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@/shared/utils";
import { BehaviorSubject, Observable } from "rxjs";
import { injectable } from "tsyringe";

@injectable()
class AuthService {
  private authState$ = new BehaviorSubject<AuthState>(this.getInitialAuthState());
  constructor() {
    const savedState = getLocalStorageItem(LOCAL_STORAGE_USER_KEY);
    if (savedState) {
      this.authState$.next(JSON.parse(savedState));
    }
  }
  private getInitialAuthState(): AuthState {
    return {
      isAuthenticated: false,
      user: null,
    };
  }

  getAuthState(): Observable<AuthState> {
    return this.authState$.asObservable();
  }

  get currentUserValue(): AuthState {
    return this.authState$.getValue();
  }

  async login(username: string, password: string): Promise<AuthState> {
    try {
      const response = await fetch("/users/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      const newAuthState: AuthState = {
        isAuthenticated: true,
        user: data,
      };

      this.authState$.next(newAuthState);
      setLocalStorageItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(newAuthState));

      return newAuthState;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  logout(): void {
    const newAuthState: AuthState = {
      isAuthenticated: false,
      user: null,
    };
    this.authState$.next(newAuthState);
    removeLocalStorageItem(LOCAL_STORAGE_USER_KEY);
  }
}

export default AuthService;
