import { RiArrowDownSLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function MenuItem({ title, dropdown }) {
  return (
    <li className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium hover:bg-slate-100">
      {title}
      {dropdown && <RiArrowDownSLine />}
    </li>
  );
}

export default MenuItem;
