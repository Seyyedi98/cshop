/* eslint-disable react/prop-types */
function Department({ item }) {
  return (
    <div className="flex w-[296px] flex-col items-center justify-center">
      <img
        className="h-[296px] w-[296px] rounded-2xl"
        style={{ backgroundColor: `${item.bgColor}` }}
        src={item.image}
      />
      <p className="mt-4 text-base font-semibold text-neutral-900 sm:text-lg">
        {item.title}
      </p>
      <p className="mt-0.5 block text-sm text-neutral-500 sm:mt-1.5">
        {item.subtitle}
      </p>
    </div>
  );
}

export default Department;
