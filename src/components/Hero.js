import React from "react";
import img1 from "../assets/images/b1.png";
import img2 from "../assets/images/b2.png";
import img3 from "../assets/images/b3.png";
import img4 from "../assets/images/b18.png";

const Hero = () => {
  return (
    <>
      <section className="bg-primary h-[50vh] heroSection p-4 cursor-pointer">
        <img
          className="h-56 w-[40vw] object-cover rounded-xl"
          src={img1}
          alt=""
        />
        <img
          className="h-56 w-[40vw] object-cover rounded-xl"
          src={img2}
          alt=""
        />
        <img
          className="h-56 w-[40vw] object-cover rounded-xl"
          src={img3}
          alt=""
        />
        <img
          className="h-56 w-[40vw] object-cover rounded-xl"
          src={img4}
          alt=""
        />
      </section>
    </>
  );
};

export default Hero;
