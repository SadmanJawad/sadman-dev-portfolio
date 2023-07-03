import  { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineBook,AiOutlineTrophy,AiOutlineIdcard } from "react-icons/ai";
import {GrCli, GrContactInfo, GrHomeOption, GrPhone, GrUser} from "react-icons/gr"

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a  onClick={handleNav}
            href="#intro"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a  onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrUser  size={20} />
            <span className="pl-4">About me</span>
          </a>
          <a  onClick={handleNav}
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineBook size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a  onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTrophy size={20} />
            <span className="pl-4">Awards</span>
          </a>

          <a  onClick={handleNav}
            href="#timeline"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineIdcard size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a  onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Publications</span>
          </a>
        
        </div>
      ) : (
        ""
)}

        <div  className=" md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a href="#intro" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <GrHomeOption  size={20}/>
            </a>
            <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <GrUser  size={20}/>
            </a>
            <a href="#project" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <GrCli  size={20}/>
            </a>
            <a href="#skills" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineTrophy  size={20}/>
            </a>
            <a href="#timeline" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <GrContactInfo  size={20}/>
            </a>
            <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <GrPhone  size={20}/>
            </a>
        
          </div>
        </div>



    </div>
  );
};

export default SideNav;
