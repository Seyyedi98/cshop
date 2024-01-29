import MenuItem from "./MenuItem";

function MenuItems() {
  return (
    <div className="fixed grid h-screen w-screen place-items-center md:relative md:h-full md:w-full">
      <ul className="flex flex-col justify-between gap-3 md:flex-row lg:gap-5">
        <MenuItem title="Home" link="/" />
        <MenuItem title="Shop" link="/shop" />
        <MenuItem title="Categories" dropdown={true} />
        <MenuItem title="About us" link="/about" />
        <MenuItem title="Blog" link="/blog" />
      </ul>
    </div>
  );
}

export default MenuItems;
