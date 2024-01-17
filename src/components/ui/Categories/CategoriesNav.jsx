/* eslint-disable react/prop-types */
function CategoriesNav({ title, icon, isActive, onClick }) {
  return (
    <li
      onClick={() => onClick(title)}
      className={`${
        isActive === title
          ? "bg-black text-white opacity-100"
          : "bg-white text-black opacity-80"
      }  flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 text-sm transition-all duration-100 hover:opacity-100`}
    >
      <span className="text-xl">{icon}</span> {title}
    </li>
  );
}

export default CategoriesNav;
