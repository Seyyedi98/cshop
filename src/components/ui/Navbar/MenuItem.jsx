import { RiArrowDownSLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function MenuItem({ title, dropdown }) {
  return (
    <li
      className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-4 text-3xl 
     font-semibold hover:bg-slate-100 md:px-2 md:py-2 md:text-sm md:font-medium lg:px-4"
    >
      {title}
      {dropdown && <RiArrowDownSLine />}
    </li>
  );
}

export default MenuItem;
