import Header from "../components/Header";
import Filter from "../components/ui/Filter/filter";

function Shop() {
  return (
    <div>
      <Header />

      <section className="container">
        <h1 className="mt-20 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Shop
        </h1>
        <p className="mt-4 block w-1/2 text-sm text-neutral-500 sm:text-base">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
        <hr className="my-14 border-slate-200 " />

        <div className="flex gap-8">
          <aside className="w-1/4">
            <Filter />
          </aside>
          <main className="w-3/4"></main>
        </div>
      </section>
    </div>
  );
}

export default Shop;
