import { IoSearch } from "react-icons/io5";

const Serach = () => {
  return (
    <div className="relative flex flex-1 ">
      <input type="text" className="w-full border border-gray-200 py-2 pl-10 txt-sm outline-2 rounded-sm " placeholder="Search" />
      <IoSearch className="absolute top-2 left-3 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default Serach;
