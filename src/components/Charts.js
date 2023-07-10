import React from "react";
import img1 from "../assets/images/b10.png";
import img2 from "../assets/images/b11.png";
import img3 from "../assets/images/b8.png";
import img4 from "../assets/images/b9.png";

const Charts = () => {
  return (
    <section className="bg-secondary sm:px-12 px-4 py-6 space-y-4">
      <h1 className="text-center text-xl">Top Charts</h1>
      <section className="md:flex grid items-center gap-4">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Charts;
