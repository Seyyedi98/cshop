import Logo from "./ui/Navbar/Logo";
import MenuItems from "./ui/Navbar/MenuItems";
import NavButtons from "./ui/Navbar/NavButtons";

function Header() {
  return (
    <>
      <header className="fixed z-50 w-screen border-b-[1px] bg-white">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-5">
          <Logo size="big" />
          <MenuItems />
          <NavButtons />
        </nav>
      </header>
      <div className=" h-[84px] w-full"></div>
    </>
  );
}

export default Header;
