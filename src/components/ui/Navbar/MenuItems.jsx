import MenuItem from "./MenuItem";

function MenuItems() {
  return (
    <ul className="flex justify-between gap-5">
      <MenuItem title="Home" />
      <MenuItem title="Shop" />
      <MenuItem title="Categories" dropdown={true} />
      <MenuItem title="About us" />
      <MenuItem title="Blog" />
    </ul>
  );
}

export default MenuItems;
