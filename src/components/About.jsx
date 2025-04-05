import { CiHeart, CiLock } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import PictureStack from "./PictureStack";
import { useBoard } from "../Context/BoardProvider";
function About() {
  const { board } = useBoard();
  const { title, isPublic, members } = board || {};
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between bg-white px-4 md:px-[1vw] ">
        <div className="flex flex-row items-center md:gap-[3vw] w-full md:w-auto">
          <div className="md:w-auto">
            <p className="text-base md:text-[1.5vw] font-stretch-90% font-semibold">
              {title}
            </p>
          </div>

          <div className="flex flex-row items-center md:gap-[0.5vw]">
            <CiHeart className="text-lg md:text-[1.5vw] cursor-pointer text-gray-400 hover:text-gray-700" />
            <div className="border-[0.1vw] border-gray-200 h-[5vh]" />
            {isPublic ? (
              <div className="flex flex-row items-center gap-[0.2vw] cursor-pointer text-gray-400 hover:text-gray-700">
                <IoEarthOutline className="text-lg md:text-[1.5vw]" />
                <span className="text-sm md:text-[1vw]">Public</span>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-700">
                <CiLock className="text-lg md:text-[1.5vw] cursor-pointer text-gray-400 hover:text-gray-700" />
                <span className="text-sm md:text-[1vw]">Private</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 md:gap-[3vw]">
          <PictureStack members={members} />
          <span className="text-base md:text-[1.5vw] font-medium cursor-pointer hover:underline">
            Menu
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col  justify-between bg-white ">
        <div className="w-full">
          <p className="text-base font-semibold">{title}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex flex-row items-center gap-2 ">
            <CiHeart className="text-lg  cursor-pointer text-gray-400 hover:text-gray-700" />
            <div className="border-[0.1vw] border-gray-200 h-[5vh]" />
            {isPublic ? (
              <div className="flex flex-row items-center gap-[0.2vw] cursor-pointer text-gray-400 hover:text-gray-700">
                <IoEarthOutline className="text-lg " />
                <span className="text-sm ">Public</span>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-700">
                <CiLock className="text-lg  cursor-pointer text-gray-400 hover:text-gray-700" />
                <span className="text-sm ">Private</span>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center justify-between gap-4  330px:w-auto ">
            <PictureStack members={members} />
            <span className="text-base  font-medium cursor-pointer hover:underline">
              Menu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
