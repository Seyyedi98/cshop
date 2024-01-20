import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function MenuItem({ title, dropdown, link }) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => link && navigate(`${link}`)}
      className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-2
     text-xl font-semibold hover:bg-slate-100 md:px-2 md:text-sm md:font-medium lg:px-4"
    >
      {title}
      {dropdown && <RiArrowDownSLine />}
    </li>
  );
}

export default MenuItem;
