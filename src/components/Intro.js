import React from 'react'
import img1 from "../assets/images/b17.png";



const Intro = () => {
  return (
    <>
    <section className='bg-secondary px-8 py-8 space-y-4'>
        <h1 className='text-center text-2xl font-bold'>Introducing Msanii</h1>
        <img className='rounded-xl h-[70vh] object-cover w-full' src={img1} alt="" />
    </section>
    </>
  )
}

export default Intro