import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function CategoriesCard({ data }) {
  return (
    <div
      className="relative flex h-[374px] w-[a408px]
    cursor-pointer flex-col justify-between rounded-3xl bg-white p-8
     shadow-sm transition-all duration-200 hover:shadow-lg"
    >
      <img
        className="absolute bottom-0 right-0 max-w-[280px] opacity-80"
        src={data.background}
      />
      <div className=" flex items-center justify-between">
        <img className="h-20 w-20 rounded-full bg-slate-100" src={data.image} />
        <span className="text-xs font-medium text-slate-700">
          {data.length} products
        </span>
      </div>

      <div>
        <span className="mb-2 block text-sm text-slate-500">Manufacturar</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">{data.title}</h2>
      </div>

      <Link
        className="group-hover:text-primary-500 flex items-center gap-2
       text-sm font-medium transition-colors"
      >
        See Collection
        <span>
          <RiArrowRightLine />
        </span>
      </Link>
    </div>
  );
}

export default CategoriesCard;
