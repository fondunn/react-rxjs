import PageLayout from "@/components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400">
        <h1 className="relative z-[1] text-center text-4xl font-semibold uppercase text-stone-50 lg:text-6xl">
          Welcome page
        </h1>
        <div className="absolute left-2/4 top-1/4 z-[0] h-0 w-0 rotate-12 border-l-[80px] border-r-[80px] border-t-[105px] border-l-transparent border-r-transparent border-t-rose-500 drop-shadow-md md:left-3/4"></div>
        <div className="border-t--600 absolute left-1/4 top-3/4 z-[0] h-0 w-0 rotate-[166deg] border-l-[90px] border-r-[80px] border-t-[105px] border-l-transparent border-r-transparent border-t-amber-200 drop-shadow-md md:left-1/4"></div>
      </div>
    </PageLayout>
  );
};
export default HomePage;
