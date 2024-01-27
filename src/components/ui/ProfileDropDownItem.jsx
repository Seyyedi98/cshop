/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProfileDropDownItem({ children, title }) {
  return (
    <Link className="flex items-center gap-4 rounded-xl p-3 hover:bg-slate-100">
      <span className="text-lg text-slate-700">{children}</span>
      <span className="text-sm font-medium text-slate-800">{title}</span>
    </Link>
  );
}

export default ProfileDropDownItem;
