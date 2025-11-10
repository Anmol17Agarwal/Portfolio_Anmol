import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaTools
} from "react-icons/fa";
import {
  SiSpringboot,
  SiExpress,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiJunit5,
  SiSelenium,
  SiCypress,
  SiSpringsecurity,
} from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { GiArtificialHive } from "react-icons/gi"; // for OOP/DSA

const skills = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", icon: <FaJava size={35} color="#f89820" /> },
      { name: "JavaScript", icon: <FaReact size={35} color="#F7DF1E" /> },
      { name: "OOP", icon: <GiArtificialHive size={35} color="#38BDF8" /> },
      { name: "DSA", icon: <GiArtificialHive size={35} color="#3B82F6" /> },
    ],
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot size={35} color="#6DB33F" /> },
      { name: "Express.js", icon: <SiExpress size={35} color="#000000" /> },
      { name: "Node.js", icon: <FaNodeJs size={35} color="#539E43" /> },
      { name: "Hibernate / JPA", icon: <SiHibernate size={35} color="#59666C" /> },
      { name: "REST APIs", icon: <SiCypress size={35} color="#10B981" /> },
      { name: "Spring Security", icon: <SiSpringsecurity size={35} color="#68BD45" /> },
    ],
  },
  {
    category: "Testing & Automation",
    items: [
      { name: "JUnit", icon: <SiJunit5 size={35} color="#25A162" /> },
      { name: "Selenium", icon: <SiSelenium size={35} color="#43B02A" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={35} color="#336791" /> },
      { name: "MySQL", icon: <SiMysql size={35} color="#00758F" /> },
      { name: "MongoDB", icon: <SiMongodb size={35} color="#4DB33D" /> },
    ],
  },
  {
    category: "Cloud, DevOps & CI/CD",
    items: [
      { name: "AWS", icon: <FaAws size={35} color="#FF9900" /> },
      { name: "Docker", icon: <FaDocker size={35} color="#2496ED" /> },
      { name: "Git & GitHub", icon: <TbBrandGithub size={35} color="#181717" /> },
    { name: "CI/CD", icon: <FaTools size={35} color="#F97316" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact size={35} color="#61DAFB" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[80%] sm:py-16 py-10">
        <div className="relative font-bold text-center mb-10">
          <div className="text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            SKILLS
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
            Skills
          </h1>
        </div>

        <div className="space-y-10">
          {skills.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-primary mb-4 text-center sm:text-left">
                {section.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 w-28 h-28"
                  >
                    {item.icon}
                    <p className="text-sm font-semibold group-hover:text-primary text-center mt-2">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
