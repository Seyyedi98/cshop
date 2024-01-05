import { RiSearchLine, RiShoppingCart2Line, RiUserLine } from "react-icons/ri";

import NavButton from "./NavButton";

function NavButtons() {
  return (
    <div className="flex justify-between gap-x-1">
      <NavButton>
        <RiSearchLine />
      </NavButton>

      <NavButton showMenu="true">
        <RiUserLine />
      </NavButton>

      <NavButton showMenu="true">
        <RiShoppingCart2Line />
      </NavButton>
    </div>
  );
}

export default NavButtons;
