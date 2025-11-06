import React from 'react'
import ServicesBox from './ServicesBox.jsx'

const Services = () => {
  return (
    <>
     <section className='bg-gray-50 dark:bg-gray-900 dark:text-white py-16'>
        <div className='container flex flex-col items-center text-center'>
            <h1 className='inline-block text-4xl font-bold mb-4 border-b-4 border-primary pb-2'>
              Services
            </h1>
            <p className='text-slate-600 dark:text-slate-400 md:w-[60%] mx-auto text-lg'>
              Crafting intelligent and scalable solutions — from IoT systems to enterprise-grade applications.
            </p>
        </div>

        <div className='mt-12'>
            <ServicesBox/>
        </div>
    </section>
    </>
  )
}

export default Services
