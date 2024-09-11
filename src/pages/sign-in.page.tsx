import PageLayout from "@/components/PageLayout";
import FormLogin from "@/features/auth/Form.Login";

const SignInPage = () => {
  return (
    <PageLayout>
      <FormLogin title="Sign in" />
      <div className="flex justify-center gap-1 pt-8">
        <p className="text-stone-500">
          To test fake backend: login: <strong>test</strong> password: <strong>test</strong>
        </p>
      </div>
    </PageLayout>
  );
};
export default SignInPage;
