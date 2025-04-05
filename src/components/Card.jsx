import { CiHeart } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";
import { RiMessage2Line } from "react-icons/ri";
import PictureStack from "./PictureStack";
import { useBoard } from "../Context/BoardProvider";

function Card({ card }) {
  const { board } = useBoard();
  const { labelColors } = board || {};
  const { title, description, labels, votes, comments, attachments, members } =
    card;
  return (
    <div>
      {card?.coverImage && (
        <img
          src={card?.coverImage}
          alt="Card"
          className="rounded-lg w-full max-h-[40vh] mb-2 object-cover object-center"
        />
      )}
      {labels?.length > 0 && (
        <div className="flex flex-row gap-2 items-center py-[1.5vh]">
          {labels.map((label) => {
            const labelColor = labelColors?.[label?.color];
            return (
              <hr
                key={label?.id}
                className="md:border-[0.7vh] border-4 rounded-lg w-[3rem] md:w-[3vw]"
                style={{ borderColor: labelColor }}
              ></hr>
            );
          })}
        </div>
      )}

      <section className="text-base md:text-[1vw] font-medium mb-1">
        {title}
      </section>
      <p className="text-xs md:text-[1vw] text-gray-500 mb-4">{description}</p>

      <div className="mb-1 flex flex-row  items-center justify-between gap-[1vw]">
        <PictureStack members={members} showAddIcon={true} />
        <div className="flex flex-row md:gap-[0.5vw] gap-2 items-center md:text-[1vw] text-[0.8rem] text-gray-400">
          <span className="flex flex-row md:gap-[0.1vw] gap-1 items-center text-gray-400 hover:text-gray-700 cursor-pointer">
            {comments} <RiMessage2Line />
          </span>
          <span className="flex flex-row md:gap-[0.1vw] gap-1 items-center text-gray-400 hover:text-gray-700 cursor-pointer">
            {votes} <CiHeart />
          </span>
          <span className="flex flex-row md:gap-[0.1vw] gap-1 items-center text-gray-400 hover:text-gray-700 cursor-pointer">
            {attachments} <GrAttachment />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
