import Avatar from "@/components/Avatar";
import RootNavigation from "@/components/Navigation";
import MobileNav from "@/components/Navigation.mobile";
import Profile from "@/components/Profile";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-10 mx-auto w-full max-w-6xl px-2 py-2 md:px-3 lg:px-4">
      <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-8 rounded-md bg-stone-100 px-2 py-2 shadow-md lg:grid-cols-[auto_1fr_auto]">
        <div>LOGO</div>
        <div className="hidden lg:block">
          <RootNavigation />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <Avatar />
          <Profile />
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
