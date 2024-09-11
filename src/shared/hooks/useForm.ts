import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "./useAuth";

const initialErrorState: FormErrors = {
  username: false,
  password: false,
  message: null,
};

export const useForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>(initialErrorState);

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const newErrors: FormErrors = {};

    if (!username) newErrors.username = true;
    if (!password) newErrors.password = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const user = await login(username, password);
      if (user) navigate({ to: "/dashboard" });
    } catch (error: any) {
      setLoading(false);
      setErrors({
        username: true,
        password: true,
        message: error.message,
      });
    }
  };

  return {
    handleSubmit,
    errors,
    loading,
  };
};
