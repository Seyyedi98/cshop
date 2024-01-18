import HIW1img from "../assets/images/howItWorks/HIW1img.webp";
import HIW2img from "../assets/images/howItWorks/HIW2img.png";
import HIW3img from "../assets/images/howItWorks/HIW3img.png";
import HIW4img from "../assets/images/howItWorks/HIW4img.png";
import VectorHIW from "../assets/images/howItWorks/VectorHIW.svg";

function HowItWorks() {
  return (
    <div className="container relative my-8 flex border-y-2 border-solid border-slate-100 py-8 sm:mb-12 sm:mt-32 sm:items-start sm:py-32">
      <img src={VectorHIW} className="absolute z-10 -ml-12 mt-6" />
      <ul className="z-20 flex flex-wrap items-center justify-center gap-16 lg:flex-nowrap ">
        <li className="flex flex-col items-center gap-4">
          <img className="w-28 md:w-36" src={HIW1img} />
          <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-900">
            Step 1
          </span>
          <h4 className="text-base font-semibold">Filter & Discover</h4>
          <p className="block w-2/3 text-center text-sm leading-6 text-slate-600">
            Smart filtering and suggestions make it easy to find
          </p>
        </li>

        <li className="flex flex-col items-center gap-4">
          <img className="w-28 md:w-36" src={HIW2img} />
          <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-900">
            Step 2
          </span>
          <h4 className="text-base font-semibold">Add to bag</h4>
          <p className="block w-2/3 text-center text-sm leading-6 text-slate-600">
            Easily select the correct items and add them to the cart
          </p>
        </li>

        <li className="flex flex-col items-center gap-4">
          <img className="w-28 md:w-36" src={HIW3img} />
          <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-900">
            Step 3
          </span>
          <h4 className="text-base font-semibold">Fast shipping</h4>
          <p className="block w-2/3 text-center text-sm leading-6 text-slate-600">
            The carrier will confirm and ship quickly to you
          </p>
        </li>

        <li className="flex flex-col items-center gap-4">
          <img className="w-28 md:w-36" src={HIW4img} />
          <span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-900">
            Step 4
          </span>
          <h4 className="text-base font-semibold">Enjoy the product</h4>
          <p className="block w-2/3 text-center text-sm leading-6 text-slate-600">
            Have fun and enjoy your 5-star quality products
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HowItWorks;
