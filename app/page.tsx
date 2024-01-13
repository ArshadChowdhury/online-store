"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";

export default function Home() {
  return (
    <>
      <main className="max-w-3xl mx-auto my-10 aspect-[16/9] object-contain">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="relative">
            <Image
              className="rounded-md max-w-full h-auto"
              src={"/image-1.jpg"}
              style={{objectFit: "cover"}}
              quality={100}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md max-w-full h-auto "
              src={"/image-2.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-3.avif"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-4.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-5.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-6.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-7.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="rounded-md"
              src={"/image-8.jpg"}
              // style={{ maxWidth: "100%", height: "auto" }}
              fill
              sizes="50vw"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
