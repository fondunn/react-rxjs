import { FC, PropsWithChildren } from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-6xl px-2 pt-2 md:px-3 md:pt-4 lg:px-4 lg:pt-6">
      {children}
    </main>
  );
};

export default PageLayout;
