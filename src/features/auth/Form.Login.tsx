import { useForm } from "@/shared/hooks/useForm";
import Button from "@/ui/Button";
import Input from "@/ui/input";
import { PreloaderCircle } from "@/ui/PreloaderCircle";

interface Props {
  title: string;
}

const FormLogin = ({ title }: Props) => {
  const { handleSubmit, errors, loading } = useForm();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-md bg-gradient-to-r from-teal-400 to-yellow-200 px-4 py-10 shadow-md md:px-16 md:py-24">
      <h2 className="mb-8 text-center text-5xl font-semibold uppercase text-stone-50 drop-shadow-md md:mb-16 md:text-6xl">
        {title}
      </h2>
      <form className="mx-auto flex w-full max-w-xl flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          disabled={loading}
          placeholder="Username"
          name="username"
          id="username"
          aria-invalid={errors.username}
        />
        <Input
          disabled={loading}
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          aria-invalid={errors.password}
        />
        <Button disabled={loading} type="submit" className="relative mt-4 h-10">
          {!loading ? <>Submit</> : <PreloaderCircle className="mx-auto" />}
        </Button>
      </form>
      {errors?.message && (
        <div className="mx-auto w-full max-w-xl rounded-md bg-red-500/80 py-2 text-center">
          <span className="text-sm text-stone-50">{errors?.message}</span>
        </div>
      )}
    </div>
  );
};

export default FormLogin;
