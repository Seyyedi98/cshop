import { RiSearchLine, RiShoppingCart2Line, RiUserLine } from "react-icons/ri";

import NavButton from "./NavButton";
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className="flex justify-between lg:gap-x-1">
      <NavButton>
        <RiSearchLine />
      </NavButton>

      <Link to="/signin">
        <NavButton showMenu="true">
          <RiUserLine />
        </NavButton>
      </Link>

      <NavButton showMenu="true">
        <RiShoppingCart2Line />
      </NavButton>
    </div>
  );
}

export default NavButtons;
