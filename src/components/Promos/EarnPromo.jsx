import rightLargeImg from "../../assets/images/banner/rightLargeImg.webp";
import Button from "../ui/Buttons/Button";
import Logo from "../ui/Navbar/Logo";

function EarnPromo() {
  return (
    <>
      <div
        className="mb-24 mt-12 flex w-full flex-col items-center justify-center
       md:mb-0 md:mt-0 md:items-start md:p-12 lg:p-20"
      >
        <Logo size="small" />
        <h1
          className="mt-8 text-center text-4xl font-semibold leading-[1.3] md:text-left
         lg:text-6xl"
        >
          Earn free money with Ciseco
        </h1>
        <p className="mt-6 block text-slate-500">
          With Ciseco you will get freeship & savings combo...
        </p>
        <div className="mt-12 flex gap-4">
          <Button color="black" size="medium">
            Saving combo
          </Button>
          <Button color="tranparent" size="medium">
            Discover more
          </Button>
        </div>
      </div>
      <img
        src={rightLargeImg}
        className="lg:h-[400px]d mt-32 hidden md:inline md:h-[300px] xl:h-[517px] xl:w-[728px]"
      />
    </>
  );
}

export default EarnPromo;
