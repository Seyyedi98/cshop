import {
  RiLoginBoxLine,
  RiSearchLine,
  RiShoppingCart2Line,
  RiUserLine,
} from "react-icons/ri";

import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import ProfileDropDown from "../../profileDropDown";
import { useState } from "react";
import { useUser } from "../../../features/authentication/useUser";

function NavButtons() {
  const { isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between lg:gap-x-1">
      <NavButton>
        <RiSearchLine />
      </NavButton>

      {!isAuthenticated && (
        <div onClick={() => navigate("/signin")}>
          <NavButton showMenu="true">
            <RiLoginBoxLine />
          </NavButton>
        </div>
      )}

      {isAuthenticated && (
        <div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <NavButton showMenu="true">
              <RiUserLine />
            </NavButton>
          </div>

          <div className={`relative ${isOpen ? "visible" : "invisible"}`}>
            <div className="absolute left-[50%] top-2">
              <ProfileDropDown />
            </div>
          </div>
        </div>
      )}

      <NavButton showMenu="true">
        <RiShoppingCart2Line />
      </NavButton>
    </div>
  );
}

export default NavButtons;
