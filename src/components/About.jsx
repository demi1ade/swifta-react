import React from 'react'
import laptop from '../assets/laptop.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#4080b8] font-bold'>ABOUT US</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empowering Africa</h1>
                <p >
                Formed in 1994 and incorporated in 2003, we have remained committed to adopting an innovative approach in providing technology solutions across Africa that guarantee excellence for our clients' businesses and improve lives within the sub-Saharan entrepreneurial space.
                </p>
                <button className='text-[#4080b8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[black]'>More About Us</button>
            </div>

        </div>

    </div>
  )
}

export default About