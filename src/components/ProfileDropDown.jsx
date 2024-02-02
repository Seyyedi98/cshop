/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  RiClipboardLine,
  RiHeart3Line,
  RiLifebuoyLine,
  RiLightbulbFlashLine,
  RiLogoutBoxLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { useUser } from "../features/authentication/useUser";
import ProfileDropDownItem from "./ui/ProfileDropDownItem";

function ProfileDropDown() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { logout, isLoading: isLoggingOut } = useLogout();

  if (user)
    return (
      <div
        className="flex w-64 flex-col gap-1 rounded-2xl border-2 border-solid 
    border-slate-200 bg-white p-4 shadow-lg"
      >
        <div className="flex gap-2">
          <figure className="h-16 w-16 rounded-full">
            <img />
          </figure>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">
              {Object.values(user.user_metadata)[0]}
            </h1>
            <span className="text-xs font-thin text-slate-600">
              {user.email}
            </span>
          </div>
        </div>

        <hr className="border-slate-300" />
        <ProfileDropDownItem title="My Account">
          <RiUserLine />
        </ProfileDropDownItem>

        <ProfileDropDownItem title="My Order">
          <RiClipboardLine />
        </ProfileDropDownItem>

        <ProfileDropDownItem title="Whishlist">
          <RiHeart3Line />
        </ProfileDropDownItem>

        <hr className=" border-slate-300 " />
        <ProfileDropDownItem title="Dark Theme">
          <RiLightbulbFlashLine />
        </ProfileDropDownItem>

        <ProfileDropDownItem title="Help">
          <RiLifebuoyLine />
        </ProfileDropDownItem>

        <Link
          onClick={() => {
            logout();
          }}
          className="flex items-center gap-4 p-3 hover:bg-slate-100"
        >
          <button className="text-lg text-slate-700">
            <RiLogoutBoxLine />
          </button>
          <span className="text-sm font-medium text-slate-800">
            {isLoggingOut ? "Logging Out..." : "Logout"}
          </span>
        </Link>
      </div>
    );

  return null;
}

export default ProfileDropDown;
