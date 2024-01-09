/* eslint-disable no-unused-vars */
import DiscoverMoreItem from "./ui/DiscoverMore/DiscoverMoreItem";

/* eslint-disable react/prop-types */
function VerticalSliderItems({ slides }) {
  return slides.map((slide) => (
    <DiscoverMoreItem slide={slide} key={slide.id} />
  ));
}

export default VerticalSliderItems;
