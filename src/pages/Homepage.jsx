/* eslint-disable no-unused-vars */
import VerticalSlider from "../components/VerticalSlider";
import Header from "../components/Header";
import Banner from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Promo from "../components/Promos/Promo";
import EarnPromo from "../components/Promos/EarnPromo";
import CtaPromo from "../components/Promos/CtaPromo";

import { products, slides } from "../data/data";
import dots from "../assets/images/banner/dots.svg";

import "../styles/styles.css";
import SpecialOfferPromo from "../components/Promos/SpecialOfferPromo";
import DiscoverMoreItem from "../components/ui/DiscoverMore/DiscoverMoreItem";
import ProductCard from "../components/ui/Products/ProductCard";

function Homepage() {
  const numNewArrivalItems = 6;
  const numBestSellingItems = 7;
  const newArrivalItems = products.slice(-{ numNewArrivalItems });
  const bestSellingItems = products.slice({ numBestSellingItems });

  return (
    <div className="overflow-hidden">
      <Header />
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
        items={newArrivalItems}
        overflow="hidden"
      >
        <ProductCard />
      </VerticalSlider>

      <HowItWorks />

      <Promo>
        <EarnPromo />
      </Promo>

      <VerticalSlider
        title="Best Sellers. "
        subtitle="Best selling of the month"
        items={bestSellingItems}
        overflow="hidden"
      >
        <ProductCard />
      </VerticalSlider>

      <Promo bgColor="#fefce8" marginTop="162px" bgImage="bg-dotspattern">
        <SpecialOfferPromo bgImage={dots} />
      </Promo>

      <Promo bgColor="#f8fafc" marginTop="100px" bgImage="bg-dotspattern">
        <CtaPromo bgImage={dots} />
      </Promo>
    </div>
  );
}

export default Homepage;
