import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
    return (
        <div
            className="
          flex items-center
          w-[202px] h-[34px]
          px-[10px] py-[5px]
          border-[1.5px] border-gray-300
          rounded-full
          hover:border-[#00A9E0]
          transition
        "
        >
            <input
                type="text"
                placeholder="Search for a service"
                className="
    w-full
    bg-transparent
    text-[16px]
    font-normal    
    text-black
    outline-none
    placeholder:text-[#6C6C6C]
    placeholder:font-bold
  "
            />

            <FiSearch
                size={24}
                className="text-[#00AFE3] shrink-0 cursor-pointer"
            />
        </div>
    );
}
