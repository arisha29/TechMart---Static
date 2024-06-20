import React, { useEffect } from "react";
import banner from "../About-banner.jpg";

function About() {
  
  useEffect(() => {
    document.title = "TechMart - About";
  }, []);

  return (
    <div>
      <div className="relative">
        <img src={banner} alt="" width={"100%"} />
        <div className="absolute top-[20%] left-[10%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] z-[10]">
          <p className="font-bold sm:text-[lg] md:text-[lg] lg:text-[xl] xl:text-[2xl]">
            Company Info.
          </p>
          <h1 className="font-medium mt-2 text-[3.5vw] leading-[5vw]">
            Our mission & values
          </h1>
          <p className="font-medium text-[2vw] mt-2">
            Our promise to perform responsibly as a leading, global company.
          </p>
        </div>
      </div>
      <div className="w-full text-center px-[10vw] py-[4vh] sm:leading-[4vw] md:leading-[3.5vw] lg:leading-[3vw] xl:leading-[2vw] font-serif text-lg bg-white">
        <p>
          TechMart is committed to complying with local laws and regulations as
          well as applying a strict global code of conduct to all employees. It
          believes that ethical management is not only a tool for responding to
          the rapid changes in the global business environment, but also a
          vehicle for building trust with its various stakeholders including
          customers, shareholders, employees, business partners, and local
          communities. With an aim to become one of the most ethical companies
          in the world, TechMart continues to train its employees and operate
          monitoring systems, while practicing fair and transparent corporate
          management.
        </p>
      </div>
    </div>
  );
}

export default About;
