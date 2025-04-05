import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { CiBellOn, CiCircleAlert, CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

function Header() {
  return (
    <div className="flex flex-rows justify-between py-[1.5vh] items-center mb-[2vh] px-4 md:px-[2vw] shadow-md fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex flex-row items-center gap-x-[1vw]">
        <section className="hidden md:block">
          <img
            src="icons/logo.png"
            alt="logo"
            className="w-[10vw] md:w-[5vw] "
          />
        </section>
        <div className="border-[0.1vw] border-gray-200 h-[6vh] md:block hidden" />
        <section className="flex flex-row items-center gap-x-[0.1vw] justify-between text-gray-400 hover:text-black cursor-pointer">
          <BsFileEarmarkBarGraph className="text-[1.8rem] md:text-[1.5vw]" />
          <span className="hidden md:block text-[1rem] md:text-[1.2vw] ">
            Boards
          </span>
        </section>
        <div className="border-[0.1vw] border-gray-200 h-[6vh]" />
        <section className="flex flex-row items-center md:relative ">
          <CiSearch className="md:absolute right-[1vw] text-[1.5rem] md:text-[1.5vw] cursor-pointer text-gray-400 md:text-black hover:text-black" />
          <input
            type="text"
            className="hidden md:block bg-gray-100 rounded-xl pl-[1.5vw] pr-[1vw] py-[0.2vh] w-[35vw] md:w-[25vw] text-[1.1vw] 
      border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:outline-none 
      transition duration-200 ease-in-out"
          />
        </section>
      </div>

      <div className="flex flex-row items-center gap-[2vw]">
        <IoIosAddCircleOutline className="text-[1.8rem] md:text-[2vw] cursor-pointer text-gray-400 hover:text-black active:text-black" />
        <CiCircleAlert className="text-[1.8rem] md:text-[2vw] cursor-pointer text-gray-400 hover:text-black active:text-black" />
        <CiBellOn className="text-[1.8rem] md:text-[2vw] cursor-pointer text-gray-400 hover:text-black active:text-black" />
        <img
          src="icons/User.png"
          alt="User"
          className="w-[3rem] md:w-[2.5vw] rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
