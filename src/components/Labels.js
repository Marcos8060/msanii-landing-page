import React from 'react'
import img1 from "../assets/images/b12.png";
import img2 from "../assets/images/b13.png";
import img3 from "../assets/images/b14.png";
import img4 from "../assets/images/b15.png";


const Labels = () => {
  return (
    <>
    <section className='px-12 py-6 space-y-4'>
        <h1 className='text-xl text-white text-center'>Top Labels</h1>
        <section className='flex items-center gap-4'>
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
    </>
  )
}

export default Labels