/* eslint-disable no-unused-vars */
import VerticalSliderFull from "../components/VerticalSliderFull";
import Header from "../components/Header";
import Banner from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Promo from "../components/Promos/Promo";
import VerticalSliderSmall from "../components/VerticalSliderSmall";
import EarnPromo from "../components/Promos/EarnPromo";
import CtaPromo from "../components/Promos/CtaPromo";

import { products, slides } from "../data/data";
import dots from "../assets/images/banner/dots.svg";

import "../styles/styles.css";
import SpecialOfferPromo from "../components/Promos/SpecialOfferPromo";

function Homepage() {
  const numNewArrivalItems = 6;
  const newArrivalItems = products.slice(-{ numNewArrivalItems });

  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />

      <VerticalSliderFull
        title=" Discover more. "
        subtitle="Good things are waiting for you"
        slides={slides}
      />

      <VerticalSliderSmall
        title="New Arrivals. "
        subtitle="REY backpacks & bags"
        products={newArrivalItems}
      />

      <HowItWorks />

      <Promo>
        <EarnPromo />
      </Promo>

      <Promo bgColor="#fefce8" marginTop="72px" bgImage="bg-dotspattern">
        <SpecialOfferPromo bgImage={dots} />
      </Promo>

      <Promo bgColor="#f8fafc" marginTop="100px" bgImage="bg-dotspattern">
        <CtaPromo bgImage={dots} />
      </Promo>
    </div>
  );
}

export default Homepage;
