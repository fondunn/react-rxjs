import PageLayout from "@/components/PageLayout";

const DashboardPage = () => {
  return (
    <PageLayout>
      <div className="relative flex min-h-80 items-center justify-center rounded-md bg-gradient-to-r from-emerald-700 to-teal-900">
        <h1 className="relative z-[1] text-center text-4xl font-semibold uppercase text-stone-50 lg:text-6xl">
          Private Dashboard
        </h1>
        <div className="absolute left-1/2 top-1/2 z-[0] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-rose-600 to-pink-900 drop-shadow-md"></div>
      </div>
    </PageLayout>
  );
};
export default DashboardPage;
