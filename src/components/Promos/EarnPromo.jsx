import rightLargeImg from "../../assets/images/banner/rightLargeImg.webp";
import Button from "../ui/Buttons/Button";
import Logo from "../ui/Navbar/Logo";

function EarnPromo() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Logo size="small" />
        <h1 className="mt-8 text-6xl font-semibold leading-[1.3]">
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
      <img src={rightLargeImg} className="h-[517px] w-[728px]" />
    </>
  );
}

export default EarnPromo;
