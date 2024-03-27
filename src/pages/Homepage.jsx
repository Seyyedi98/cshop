/* eslint-disable no-unused-vars */
import VerticalSlider from "../components/VerticalSlider";
import Header from "../components/Header";
import Banner from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Promo from "../components/Promos/Promo";
import EarnPromo from "../components/Promos/EarnPromo";
import CtaPromo from "../components/Promos/CtaPromo";

import { slides, departments } from "../data/data";
import dots from "../assets/images/banner/dots.svg";

import "../styles/styles.css";
import SpecialOfferPromo from "../components/Promos/SpecialOfferPromo";
import DiscoverMoreItem from "../components/ui/DiscoverMore/DiscoverMoreItem";
import ProductCard from "../components/ui/Products/ProductCard";
import CategoriesBanner from "../components/CategoriesBanner";
import PhotoGridProductCart from "../components/ui/Products/PhotoGridProductCart";
import Department from "../components/ui/Department";
import Footer from "../components/Footer";
import { useProducts } from "../features/products/useProducts";
import { useLastestProducts } from "../features/products/useLastestProducts";
import { useTopProducts } from "../features/products/useTopProducts";
import Spinner from "../components/ui/Spinner";
import Helmet from "../utils/helmet";

function Homepage() {
  const { data: products, isLoading: isLoadingProducts } = useProducts();
  const { data: lastestProducts, isLoading: isLoadingLastestProducts } =
    useLastestProducts();
  const { data: topProducts, isLoading: isLoadingTopProducts } =
    useTopProducts();

  if (isLoadingProducts || isLoadingLastestProducts || isLoadingTopProducts)
    return <Spinner />;

  return (
    <div className="overflow-hidden">
      <Header />
      <Helmet title="Home" />
      <Banner />
      <VerticalSlider
        title=" Discover more. "
        subtitle="Good things are waiting for you"
        items={slides}
      >
        <DiscoverMoreItem />
      </VerticalSlider>
      <VerticalSlider
        title="New Arrivals. "
        subtitle="REY backpacks & bags"
        items={lastestProducts}
        overflow="hidden"
      >
        <ProductCard />
      </VerticalSlider>
      <HowItWorks />
      <Promo>
        <EarnPromo />
      </Promo>
      <CategoriesBanner />
      <VerticalSlider
        title="Best Sellers. "
        subtitle="Best selling of the month"
        items={topProducts}
        overflow="hidden"
      >
        <ProductCard />
      </VerticalSlider>
      <Promo bgColor="#fefce8" marginTop="162px" bgImage="bg-dotspattern">
        <SpecialOfferPromo bgImage={dots} />
      </Promo>
      <VerticalSlider
        title="Chosen by our experts"
        items={products}
        overflow="hidden"
      >
        <PhotoGridProductCart />
      </VerticalSlider>
      <VerticalSlider
        title="Shop by department"
        items={departments}
        overflow="hidden"
      >
        <Department />
      </VerticalSlider>
      <Promo
        bgColor="#f8fafc"
        marginTop="180px"
        bgImage="bg-dotspattern"
        marginBottom="100px"
      >
        <CtaPromo bgImage={dots} />
      </Promo>
      <Footer />
    </div>
  );
}

export default Homepage;
