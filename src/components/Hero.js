import React from 'react'
import img1 from '../assets/images/b1.png'

const Hero = () => {
  return (
    <>
    <section className='bg-primary h-[50vh] heroSection'>
        <div>
            <img className='h-72' src={img1} alt="" />
        </div>
        <div>
            <img className='h-72' src={img1} alt="" />
        </div>
        <div>
            <img className='h-72' src={img1} alt="" />
        </div>
    </section>
    </>
  )
}

export default Hero