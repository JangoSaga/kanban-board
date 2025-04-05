import { BsThreeDots } from "react-icons/bs";

function ColumnHead({ title }) {
  return (
    <div className="md:text-[1.1vw] text-[1rem] font-stretch-100% font-semibold flex flex-row justify-between items-center  ">
      <span>{title}</span>
      <BsThreeDots className="text-[1.5vw] text-gray-300 hover:text-gray-600 cursor-pointer" />
    </div>
  );
}

export default ColumnHead;
