import React from 'react'
import { FiPhone } from "react-icons/fi";
import resume from "../../assets/Anmol_Agarwal_Resume.pdf";


const About = () => {
  return (
    <>
    <section id='about' className='bg-white dark:bg-slate-800 dark:text-white'>
        <div className='container md:w-[70%] sm:py-16 py-10 '>
            <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
                <div className='relative font-bold'>
                    <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700'>
                        ABOUT
                    </div>
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>About Me</h1>
                </div>
                <div className='text-slate-500 space-y-4'>
                        <p className='italic text-primary text-lg font-semibold'>
                         Turning complex business logic into high-performance backend systems.
                        </p>
                        <p>
                        I’m a results-driven Full Stack Developer with a strong focus on backend engineering and cloud-based solutions. Over the past few years, I’ve worked extensively with <b>Java (Spring Boot)</b> and <b>MERN (Express)</b> to build scalable APIs, data ingestion pipelines, and modular microservices for enterprise-grade platforms.
                        </p>
                        <p>
                        My experience includes developing analytics-driven healthcare applications, optimizing database performance, and integrating secure cloud environments using <b>AWS</b> and <b>PostgreSQL</b>. I’m passionate about clean code, automation, and transforming business logic into fast, reliable, and production-ready systems.
                        </p>
                        <p>
                        Whether it’s backend architecture, full-stack development, or DevOps integration, I thrive on solving real-world problems through efficient, maintainable, and impactful software.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                        href={resume}
                        download="Anmol_Agarwal_Resume.pdf"
                        className="primary-btn flex items-center gap-2 px-5 py-2 text-sm sm:text-base hover:scale-105 transition-transform"
                        >
                        Download Resume
                        </a>

                        <a
                        href="tel:+919794696252"
                        className="outline-btn flex items-center gap-2 px-5 py-2 text-sm sm:text-base hover:scale-105 transition-transform"
                        >
                        <FiPhone className="text-lg" /> Contact
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
