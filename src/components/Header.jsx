import Logo from "./ui/Navbar/Logo";
import MenuItems from "./ui/Navbar/MenuItems";
import NavButtons from "./ui/Navbar/NavButtons";

function Header() {
  return (
    <header className="z-50 w-screen border-b-[1px] bg-white">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-5">
        <Logo />
        <MenuItems />
        <NavButtons />
      </nav>
    </header>
  );
}

export default Header;
