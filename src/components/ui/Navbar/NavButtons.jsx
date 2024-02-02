/* eslint-disable no-unused-vars */
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
import { useSelector } from "react-redux";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import CartDropDown from "../Cart/CartDropDown";

function NavButtons() {
  const cartData = useSelector((state) => state.cart.cart);
  const { isAuthenticated } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useOutsideClick(() => setIsCartOpen(false));
  const profileRef = useOutsideClick(() => setIsProfileOpen(false));
  const navigate = useNavigate();

  const isItemsinCart = cartData.length > 0;

  return (
    <div className="flex justify-between lg:gap-x-1">
      <NavButton>
        <RiSearchLine />
      </NavButton>

      {!isAuthenticated && (
        <div className="cursor-pointer" onClick={() => navigate("/signin")}>
          <NavButton>
            <RiLoginBoxLine />
          </NavButton>
        </div>
      )}

      {isAuthenticated && (
        <div ref={profileRef}>
          <div
            className="cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <NavButton>
              <RiUserLine />
            </NavButton>
          </div>

          <div
            className={`relative animate-[fadeInUp_0.2s_forwards] ${
              isProfileOpen ? "block" : "hidden"
            }`}
          >
            <div className="absolute top-2 md:right-0">
              <ProfileDropDown />
            </div>
          </div>
        </div>
      )}

      <NavButton>
        <div ref={cartRef}>
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {isItemsinCart && (
              <span
                className="absolute -right-2 -top-2.5 flex h-4 w-4 items-center
           justify-center rounded-full bg-sky-500 text-xs text-white"
              >
                {cartData.length}
              </span>
            )}
            <RiShoppingCart2Line />
          </div>
          <div
            className={`relative animate-[fadeInUp_0.2s_forwards] ${
              isCartOpen ? "block" : "hidden"
            }`}
          >
            <div className="absolute top-6 md:right-0">
              <CartDropDown />
            </div>
          </div>
        </div>
      </NavButton>
    </div>
  );
}

export default NavButtons;
