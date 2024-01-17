/* eslint-disable no-unused-vars */
import { useState } from "react";
import Logo from "./ui/Navbar/Logo";
import MenuItems from "./ui/Navbar/MenuItems";
import NavButtons from "./ui/Navbar/NavButtons";
import HumbergerMenu from "./ui/Navbar/HumbergerMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed z-50 w-screen border-b-[1px] bg-white">
        <div
          className={`${
            isOpen ? "" : "translate-x-full"
          } z-5 fixed right-0 top-0 h-screen w-screen bg-white/50 backdrop-blur-md transition-all duration-300 md:invisible`}
        ></div>
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2  md:px-2 md:py-5">
          <div className="hidden md:block md:px-4">
            <Logo size="big" />
          </div>

          <div className="order-2 hidden sm:block md:hidden">
            <Logo size="small" />
          </div>

          {/* Desktop nav */}
          <div
            className={`${
              isOpen ? "visible" : "invisible"
            } fixed md:visible md:relative md:block`}
          >
            <MenuItems />
          </div>
          <div className="order-1">
            <NavButtons />
          </div>

          {/* Mobile nav */}
          <div className="visible relative order-3 px-4 md:invisible md:fixed">
            <HumbergerMenu
              toggleMenu={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            />
          </div>
        </nav>
      </header>
      <div className="mr-12 h-[60px] w-full md:h-[84px]"></div>
    </>
  );
}

export default Header;
