import React from 'react'
import img1 from "../assets/images/b17.png";



const Intro = () => {
  return (
    <>
    <section className='bg-secondary px-8 py-6 space-y-4'>
        <h1 className='text-center text-2xl font-bold'>Introducing Msanii</h1>
        <img className='rounded-2xl h-[90vh] object-cover w-full' src={img1} alt="" />
    </section>
    </>
  )
}

export default Intro