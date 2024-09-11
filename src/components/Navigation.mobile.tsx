import Avatar from "@/components/Avatar";
import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
import { FC } from "react";

const NavigationMobile: FC = () => {
  return (
    <label className="relative z-40 block cursor-pointer px-3 py-6 lg:hidden" htmlFor="mobile-menu">
      <input className="peer hidden" type="checkbox" id="mobile-menu" />
      <div className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:bottom-[-0.35rem] after:right-0 after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
      <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
        &nbsp;
      </div>
      <div className="fixed right-0 top-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
        <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
          <Navigation />
          <div>
            <Avatar />
            <Profile />
          </div>
        </div>
      </div>
    </label>
  );
};

export default NavigationMobile;
