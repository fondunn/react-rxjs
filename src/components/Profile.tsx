import { useAuth } from "@/shared/hooks/useAuth";
import Button from "@/ui/Button";
import Link from "@/ui/Link";
import { useNavigate } from "@tanstack/react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { user } = authState;
  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };
  return (
    <div>
      {user ? (
        <Button onClick={handleLogout} className="px-4 py-2">
          Sign out
        </Button>
      ) : (
        <Link
          href="/signin"
          label="Sign in"
          className="rounded-md border-2 border-indigo-600 bg-indigo-600 px-2 py-2 text-stone-50 hover:bg-indigo-600/90 hover:no-underline [&.active]:no-underline"
        />
      )}
    </div>
  );
};

export default Profile;
