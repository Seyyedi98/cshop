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
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-5">
          <Logo size="big" />
          <MenuItems />
          <NavButtons />
        </nav>
      </header>
      <div className="mr-12 h-[60px] w-full md:h-[84px]"></div>
    </>
  );
}

export default Header;
