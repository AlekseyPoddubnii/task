import "./Slider.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderItem from "./SliderItem";

let items = [
  {
    id: "1",
    name: "Grande 10",
    lead: "Where does it come from?",
    price: "850",
    order: 10,
    isTop: true,
    img: "https://dummyimage.com/385x325/21c2bf/fff",
  },
  {
    id: "2",
    name: "Inspire 8",
    lead: "",
    price: "999",
    order: 8,
    isTop: false,
    img: "https://dummyimage.com/385x325/21c2bf/fff",
  },
  {
    id: "3",
    name: "Enzo 9",
    price: "999",
    count: 9,
    isTop: false,
    img: "https://dummyimage.com/385x325/21c2bf/fff",
  },
  {
    id: "4",
    name: "Magel",
    lead: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    price: "999",
    count: 6,
    isTop: false,
    img: "https://dummyimage.com/385x325/21c2bf/fff",
  },
  {
    id: "5",
    name: "Invision 4",
    lead: "Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
    price: "999",
    order: 4,
    isTop: false,
    img: "https://dummyimage.com/385x325/21c2bf/fff",
  },
  {
    id: "6",
    name: "Mounte 1",
    lead: "um has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining es",
    price: "999",
    order: 1,
    isTop: false,
  },
];

export default () => {
  // Create array with 1000 slides

  let itemsSwiper = items.map((s) => (
    <SliderItem
      id={s.id}
      name={s.name}
      lead={s.lead}
      price={s.price}
      order={s.order}
      isTop={s.isTop}
      img={s.img}
    />
  ));

  return (
    <section className="slider">
      <div className="container-fluid limit">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {itemsSwiper.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
