import React from "react";
import img1 from "../assets/images/b5.png";
import img2 from "../assets/images/b6.png";
import img3 from "../assets/images/b7.png";

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
        // navText: [
        //   `<img style="width: 40px; height: 40px; transform: rotate(180deg)" src=${contrLeft} alt="images" />`,
        //   `<img src=${contrLeft} alt="images" style="width: 40px; height: 40px;" />`,
        // ],
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
    // navText: [
    //   `<img style="width: 70px; height: 70px;transform: rotate(180deg)" src=${contrLeft} alt="images" />`,
    //   `<img src=${contrLeft} alt="images" style="width: 70px; height: 70px;" />`,
    // ],
  };
  return (
    <section className="bg-primary text-white h-[90vh] py-6 px-12">
      <h1 className="text-2xl text-white text-center">Upcoming Events</h1>

      <div className="flex items-center justify-center my-6">
        <OwlCarousel {...contribute}>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img1} alt="" />
          </div>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img2} alt="" />
          </div>
          <div className="">
            <img className="max-w-[300px] mx-auto slider" src={img3} alt="" />
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
