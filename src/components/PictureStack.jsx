import { IoIosAddCircle } from "react-icons/io";

function PictureStack({ members = [], showAddIcon = false }) {
  const maxVisible = Math.min(members.length, 3);

  return (
    <div className="flex flex-row items-center -space-x-3.5 md:-space-x-[1.2vw]">
      {members.slice(0, maxVisible).map((member) => (
        <img
          key={member?.id}
          src={member?.avatar}
          alt="User"
          className="size-8 md:size-[2.7vw] rounded-full border-2 border-white cursor-pointer hover:border-gray-300 transition duration-200 ease-in-out"
        />
      ))}
      {members.length > maxVisible && !showAddIcon && (
        <div className="bg-black text-white text-xs md:text-[1.1vw] size-7 md:size-[2.5vw] rounded-full border border-white flex items-center justify-center">
          +{members.length - maxVisible}
        </div>
      )}
      {showAddIcon && (
        <IoIosAddCircle className="text-4xl md:text-[2.7vw] bg-white rounded-full cursor-pointer" />
      )}
    </div>
  );
}

export default PictureStack;
