"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function Swipper() {
  return (
    <div className="">
      <div className="max-w-[1713px] w-full     ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={-70}
          slidesPerView={3}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="/algomo1.jpg"
              alt=""
              className=" min-h-[540px] max-h-[540px]  max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/algomon4.png"}
              alt=""
              className="min-h-[540px] max-h-[540px] max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/algomon3.png"}
              alt=""
              className="min-h-[540px] max-h-[540px] max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/algomon4.png"}
              alt=""
              className="min-h-[540px] max-h-[540px] max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/algomo1.jpg"}
              alt=""
              className="min-h-[540px] max-h-[540px] max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/algomo1.jpg"}
              alt=""
              className="min-h-[540px] max-h-[540px] max-w-[484px] w-full rounded-xl"
            />
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Swipper;
