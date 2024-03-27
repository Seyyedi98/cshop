import Header from "../components/Header";
import Filter from "../components/ui/Filter/filter";
import ProductCard from "../components/ui/Products/ProductCard";
import Spinner from "../components/ui/Spinner";
import { useProducts } from "../features/products/useProducts";

function Shop() {
  const { isLoading, data } = useProducts();

  if (data === null) console.log("No Data");
  console.log(data);
  return (
    <div>
      <Header />

      <section className="container px-8">
        <h1 className="mt-20 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Shop
        </h1>
        <p className="mt-4 block text-sm text-neutral-500 sm:text-base md:w-1/2">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
        <hr className="my-14 border-slate-200 " />

        <div className="flex gap-8">
          <aside className="w-1/4">
            <Filter />
          </aside>
          <main className="w-3/4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {isLoading ? (
                <Spinner />
              ) : data?.length > 0 ? (
                data.map((item) => <ProductCard key={item.id} item={item} />)
              ) : (
                <h1>No product found!</h1>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Shop;
