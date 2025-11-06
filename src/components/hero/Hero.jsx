import React from "react";
import { TypeAnimation } from "react-type-animation";
import personImg from "../../assets/portfolio.jpg.png";

const Hero = () => {
  return (
    <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={personImg}
            alt="Anmol Agarwal"
            className="w-full md:max-w-lg mx-auto rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4 sm:space-y-6 grid justify-items-center sm:justify-items-start">
          <p className="uppercase tracking-widest text-primary font-semibold">
            Hello,
          </p>

          {/* Dynamic Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-black/90 dark:text-white">
            I’m{" "}
            <span className="text-primary">Anmol Agarwal</span>
            <br />
            <TypeAnimation
              sequence={[
                "a Software Engineer 💻",
                2000,
                "a Backend Developer ⚙️",
                2000,
                "a Full Stack Developer",
                2000,
                "a IoT Engineer 🔌",
                2000
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-primary"
            />
          </h1>

          {/* Professional Bio */}
          <p className="text-black/75 dark:text-white/70 text-center sm:text-left max-w-lg leading-relaxed">
            I design and build powerful backend systems and full-stack applications that are clean, 
            scalable, and production-ready. With expertise in Java, Data Structures, Spring Boot, Spring Security, MERN, and cloud infrastructure,
             I help businesses turn ideas into reliable, high-performance software.
          </p>

          {/* Call to Action */}
          <a
            href="mailto:anmol1717agarwal@gmail.com"
            className="inline-block primary-btn !px-6 hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
