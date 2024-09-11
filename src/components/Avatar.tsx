import { useAuth } from "@/shared/hooks/useAuth";
import { getNamedAvatar } from "@/shared/utils";
import { FC } from "react";

const Avatar: FC = () => {
  const { authState } = useAuth();
  if (!authState.isAuthenticated || !authState.user) return null;
  const letter = getNamedAvatar(authState.user.username);
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-400 bg-gradient-to-r from-cyan-500 to-blue-500">
      <span className="font-medium text-slate-50">{letter}</span>
    </div>
  );
};

export default Avatar;
