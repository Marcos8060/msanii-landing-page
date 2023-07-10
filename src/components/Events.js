import React from "react";
import img1 from "../assets/images/b5.png";
import img2 from "../assets/images/b6.png";
import img3 from "../assets/images/b7.png";
import img4 from "../assets/images/left.png";
import img5 from "../assets/images/right.png";
import { AiFillCaretLeft } from "react-icons/ai";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Events = () => {
  const contribute = {
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        // dots: true,
        nav: true,
        navText: [
          `<img style="width: 50px; height: 50px" src=${img4} alt="images" />`,
          `<img src=${img5} alt="images" style="width: 50px; height: 50px;" />`,
        ],
      },
      480: {
        items: 1,
        center: false,
        nav: true,
      },
      769: {
        items: 3,
        center: true,
        nav: true,
      },
    },
    navText: [
      `<img style="width: 65px; height: 65px" src=${img4} alt="images" />`,
      `<img src=${img5} alt="images" style="width: 65px; height: 65px;" />`,
    ],
  };
  return (
    <section className="bg-primary text-white md:h-[90vh] h-auto py-6 sm:px-12 px-4">
      <h1 className="text-2xl text-white text-center">Upcoming Events</h1>

      <div className="flex items-center justify-center my-6">
        <OwlCarousel {...contribute}>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img1} alt="" />
          </div>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img3} alt="" />
          </div>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img2} alt="" />
          </div>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img3} alt="" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Events;
