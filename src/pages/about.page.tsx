import PageLayout from "@/components/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="flex min-h-80 items-center justify-center rounded-md bg-gradient-to-tr from-emerald-500 to-cyan-600">
        <h1 className="text-4xl font-semibold uppercase text-stone-50 lg:text-6xl">About us</h1>
      </div>
    </PageLayout>
  );
};
export default AboutPage;
