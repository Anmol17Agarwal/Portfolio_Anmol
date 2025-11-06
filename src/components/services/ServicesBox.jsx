import React from 'react'
import { AiFillLayout } from 'react-icons/ai'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { MdOutlinePhoneAndroid, MdSecurity } from 'react-icons/md'

const Services = [
    {
        name: "IoT Projects",
        description:
            "Explore my IoT collection built using Raspberry Pi, Node-RED, Adafruit, and cloud services. Projects include Home Automation, Weather Reporting, Gas Sensor Monitoring, and more.",
        image: "https://picsum.photos/200/310",
        icon: <AiFillLayout className="text-4xl" />,
        bgColor: "bg-blue-500/70",
        link: "https://github.com/Anmol17Agarwal?tab=repositories&q=iot",
        subLinks: [
            { title: "Home Automation with Node-RED", url: "https://github.com/Anmol17Agarwal/Home-Automation-with-Node-Red" },
            { title: "Weather Reporting via Espeak", url: "https://github.com/Anmol17Agarwal/Weather-Reporting-through-Espeak" },
            { title: "Interface Mobile Camera with RPi", url: "https://github.com/Anmol17Agarwal/Interface-Mobile-Camera-with-RPi" },
            { title: "Gas Sensor using Adafruit", url: "https://github.com/Anmol17Agarwal/Gas_Sensor_using_Adafruit" },
            { title: "Water Flow Detection using Flow Sensor", url: "https://github.com/Anmol17Agarwal/water_flow_detecton_using_flow_sensor" },
        ],
    },
    {
        name: "App Development",
        description:
            "Developing cross-platform applications with clean UI and robust backend APIs. Check out Book_Hub — a full-stack app with authentication and dynamic features.",
        image: "https://picsum.photos/200/301",
        icon: <MdOutlinePhoneAndroid className="text-4xl" />,
        bgColor: "bg-lime-500/70",
        link: "https://github.com/Anmol17Agarwal/Book_Hub",
    },    
    {
        name: "Web Application Backend",
        description:
            "Designing enterprise-grade backends using Spring Boot and PostgreSQL. The HealthCare Claim Management System delivers optimized data handling, analytics, and secure architecture.",
        image: "https://picsum.photos/200/302",
        icon: <HiMiniComputerDesktop className="text-4xl" />,
        bgColor: "bg-fuchsia-500/70",
        link: "https://github.com/Anmol17Agarwal/HealthCare-Claim-Management-System",
  },
  {   
      name: "Security Systems",
    description:
      "Implementing user authentication, authorization, and role-based access using Spring Security. Includes the User Management System and Server Manager App for full CRUD and access control.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
    link: "https://github.com/Anmol17Agarwal/User-Management-System",
  }
]

const ServicesBox = () => {
  return (
    <section id="services" className='my-10 container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {Services.map(({ name, description, image, icon, bgColor, link }) => (
            <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} rounded-xl text-white bg-[url(${image})] bg-cover bg-center bg-no-repeat bg-blend-overlay
            transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
            >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
            {icon}
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{description}</p>
            </div>
            </a>
        ))}
        </div>
    </section>
  )
}

export default ServicesBox
