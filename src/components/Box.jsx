function Box({ children }) {
  return (
    <div className="w-full px-4 md:px-[1.5vw] py-[2vh] bg-gray-100 my-[2vh] rounded-lg flex flex-col gap-2 shadow-sm hover:scale-[1.01] transition-transform duration-200 ease-in-out">
      {children}
    </div>
  );
}

export default Box;
