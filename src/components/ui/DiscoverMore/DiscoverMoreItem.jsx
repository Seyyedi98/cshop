import Button from "../Buttons/Button";

/* eslint-disable react/prop-types */
function DiscoverMoreItem({ item }) {
  return (
    <div className="cursor-pointer select-none shadow-sm">
      <div
        style={{ backgroundColor: `${item.bgColor}` }}
        className={`h-[300px] w-[540px] rounded-2xl border-2 transition-all`}
      >
        <div className="relative flex h-full flex-col p-8 ">
          <h4 className="mb-4 text-sm font-medium text-slate-600">
            {item.subtitle}
          </h4>
          <h1 className="w-1/2 text-2xl font-semibold text-slate-800">
            {item.title}
          </h1>
          <img className="absolute right-8 top-8 w-56" src={item.image} />
          <div className="mt-auto">
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

// import Button from "../Buttons/Button";

// /* eslint-disable react/prop-types */
// function DiscoverMoreItem({ slide }) {
//   return (
//     <div className="cursor-pointer select-none shadow-sm [&>span]:hover:brightness-[.95]">
//       <span
//         style={{ backgroundColor: `${slide.bgColor}` }}
//         className="absolute h-[320px]
//           w-[540px] rounded-2xl border-2 p-8 transition-all "
//       ></span>
//       <div
//         className="relative flex h-[320px] w-[540px]
//          flex-col rounded-2xl border-2 p-8 transition-all"
//       >
//         <h4 className="mb-4 text-sm font-medium text-slate-600">
//           {slide.subtitle}
//         </h4>
//         <h1 className="w-1/2 text-2xl font-semibold text-slate-800">
//           {slide.title}
//         </h1>
//         <img className="absolute right-8 top-10 w-56" src={slide.image} />
//         <div className="mt-auto">
//           <Button fill="true" size="small" color="white">
//             Show me all
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DiscoverMoreItem;
