import React from 'react'
import {TiShoppingCart} from 'react-icons/ti';


const Products = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='w-20 mx-auto mt-[-3rem] bg-transparent'>
                <TiShoppingCart size={70}  />
            </div>
                <h2 className='text-2xl font-bold text-center py-8'>SWIFTA ERP</h2>
                <p className='text-center text-4xl font-bold'>1</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>#1 Business Management Software Suite.</p>
                    <p className='py-2 border-b mx-8'>Experience efficient cloud automation solutions and make your business more productive and agile.</p>
                    
                </div>
                <button className='bg-[#4080b8] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Try Now</button>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <div className='w-20 mx-auto mt-[-3rem] bg-transparent'>
                <TiShoppingCart size={70}  />
            </div>
                <h2 className='text-2xl font-bold text-center py-8'>MSIFA</h2>
                <p className='text-center text-4xl font-bold'>2</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>MFISA is a "mobile-first" pan-African financial services acceleration platform.</p>
                    <p className='py-2 border-b mx-8 mt-8'>Our goal is to provide an Africa-wide platform with universal agents and merchant aggregation services in all 54 African countries providing last-mile services on behalf of financial services companies, digital goods merchants, utilities, service providers, etc.</p>
                </div>
                <button className='bg-black text-[#4080b8] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Try Now</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='w-20 mx-auto mt-[-3rem] bg-transparent'>
                <TiShoppingCart size={70}  />
            </div>
                <h2 className='text-2xl font-bold text-center py-8'>TECH TALENT 4 HIRE</h2>
                <p className='text-center text-4xl font-bold'>3</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Build efficiently and effectively and more stategically by leveraging our wide talent pool to hire top tech talents quickly</p>
                    <p className='py-2 border-b mx-8'>Engage our vetted developers, engineers, project managers, business analysts, testers, solutions architects, integration specialists and other IT professionals to cater for your business needs</p>
                    
                </div>
                <button className='bg-[#4080b8] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Try Now</button>
            </div>



        </div>

    </div>
  )
}

export default Products