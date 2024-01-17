import Button from "../Buttons/Button";

/* eslint-disable react/prop-types */
function DiscoverMoreItem({ item }) {
  return (
    <div className="cursor-pointer select-none shadow-sm">
      <div
        style={{ backgroundColor: `${item.bgColor}` }}
        className={`h-[full] w-[92vw] rounded-2xl border-2 transition-all sm:h-[300px] sm:w-[540px]`}
      >
        <div className="relative flex h-full flex-col items-center p-8 sm:items-start">
          <img
            className="right-8 top-8 mb-8 w-32 sm:absolute sm:mb-0 sm:w-56"
            src={item.image}
          />
          <h4 className="mb-4 text-base font-medium text-slate-600 sm:text-lg">
            {item.subtitle}
          </h4>
          <h1 className="text-center text-2xl font-semibold text-slate-800 sm:mt-4 sm:w-1/2 sm:text-left sm:text-[28px] md:text-3xl">
            {item.title}
          </h1>

          <div className="mt-8 sm:mt-auto">
            <Button fill="true" size="small" color="white">
              Show me all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMoreItem;
