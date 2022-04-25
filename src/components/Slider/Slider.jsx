import "./Slider.css";
// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {

// What I want do next..
// Fetch data from https://quantoo.pl/jobs/api/swiper/list.json (both json what U give me identical, but i think since we are working with swiper, json should match), array items, map to my array, create component, and render in Swiper

// let items = [
//     {
//         "id": "1",
//         "name": "Grande 10",
//         "lead": "Where does it come from?",
//         "price": "850",
//         "order": 10,
//         "isTop": true,
//         "img": "https://dummyimage.com/385x325/21c2bf/fff"
//       },
//       {
//         "id": "2",
//         "name": "Inspire 8",
//         "lead": "",
//         "price": "999",
//         "order": 8,
//         "isTop": false,
//         "img": "https://dummyimage.com/385x325/21c2bf/fff"
//       },
//       {
//         "id": "3",
//         "name": "Enzo 9",
//         "price": "999",
//         "count": 9,
//         "isTop": false,
//         "img": "https://dummyimage.com/385x325/21c2bf/fff"
//       },
// ]


// let itemsSwiper = items.map( s => <Item id={s.id}/>)

  return (
    <section className="slider">
      <div className="container-fluid limit">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">1. Title from JSON</h3>
              <p className="slider-item__p">Information Data from JSON</p>
              <button className="slider-item__link">Slider Info</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://volyninfa.com.ua/wp-content/uploads/2021/08/1598184997-5280.jpeg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">2. Sorry in my region</h3>
              <p className="slider-item__p">
                Start Air Danger.. "Thanks" Russia
              </p>
              <button className="slider-item__link">
                So try to work in bathroom
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">3. Sorry in my region</h3>
              <p className="slider-item__p">
                Start Air Danger.. "Thanks" Russia
              </p>
              <button className="slider-item__link">
                So try to work in bathroom
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">4. Sorry in my region</h3>
              <p className="slider-item__p">
                Start Air Danger.. "Thanks" Russia
              </p>
              <button className="slider-item__link">
                So try to work in bathroom
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">5. Sorry in my region</h3>
              <p className="slider-item__p">
                Start Air Danger.. "Thanks" Russia
              </p>
              <button className="slider-item__link">
                So try to work in bathroom
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <img
                className="slider-item__img"
                src="https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg"
                alt="Slider Item"
              />
              <h3 className="slider-item__title">6. Sorry in my region</h3>
              <p className="slider-item__p">
                Start Air Danger.. "Thanks" Russia
              </p>
              <button className="slider-item__link">
                So try to work in bathroom
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
