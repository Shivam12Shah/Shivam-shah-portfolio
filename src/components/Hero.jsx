
import Button from "../components/Button";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub, FaDownload } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { Link } from "react-router-dom";
const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  return (
    <div className="pt-20 pb-10">
      <div className="h-[30vh] lg:h-[50vh]  flex flex-col justify-center">
        <div className="flex justify-start lg:gap-[8vw]">
          <h1 className="text-5xl font-extrabold fira lg:text-[9.5vw]">
            Full-stack
          </h1>
          <div onClick={()=>scrollToSection('projects')} className="hidden lg:flex items-center gap-3 mt-8">
            <Button>Projects</Button>
            <div className=" bg-[#f5f5f5] text-[#121212] rounded-full px-3 py-3">
              <HiArrowLongRight className="text-3xl font-thin" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <h1 className="text-5xl font-extrabold fira mt-2 lg:text-[9.5vw]">
            Developer
          </h1>
        </div>
      </div>

      <div className="text-start lg:relative lg:top-[-22vh] lg:left-[2vh]">
        <p className="font-sans font-light tracking-wide text-gray-300 w-[75%] lg:w-[27%] lg:text-[2.9vh]">
          My goal is to build scalable, clean, and maintainable software. Drawing from my 3+ years of experience across freelance projects and full-time company roles, I strive to create impactful applications while making the development process enjoyable.
        </p>
      </div>

      <div onClick={()=>scrollToSection('projects')} className="lg:hidden flex items-center gap-3 mt-8">
      <> <Button>Projects</Button></>
        <div className=" bg-[#f5f5f5] text-[#121212] rounded-full px-3 py-3">
          <HiArrowLongRight className="text-3xl font-thin" />
        </div>
      </div>

      <div className="mt-12 lg:flex lg:items-end lg:justify-center gap-5 lg:relative lg:top-[-12vh]">
        <div className="flex gap-3 ">
          <Link to="https://github.com/Shivam12Shah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaGithub />
            <h1 className="text-sm">GitHub</h1>
          </Link>
          <Link to="https://www.linkedin.com/in/shivam-kumar-shah-19b347209/" target="_blank" rel="noopener noreferrer"  className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaLinkedinIn />
            <h1 className="text-sm">LinkedIn</h1>
          </Link>
          <a href="/Shivam_shah_resume.pdf" download className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2 bg-[#f5f5f5] text-[#121212] hover:opacity-90 transition-opacity">
            <FaDownload />
            <h1 className="text-sm font-medium">Resume</h1>
          </a>
        </div>
        {/* <div className="flex gap-3 mt-4 ">
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaFacebookF />
            <h1 className="text-sm">Facebook</h1>
          </div>
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaInstagram />
            <h1 className="text-sm">Instagram</h1>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaTelegramPlane />
            <h1 className="text-sm">Telegram</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
