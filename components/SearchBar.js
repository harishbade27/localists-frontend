import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div
      className="
        flex items-center
        border-[1.5px] border-gray-300
        rounded-full
        hover:border-[#00A9E0]
        transition

        w-full h-[40px] px-3         

        lg:w-[202px] lg:h-[34px] 
        lg:px-[10px] lg:py-[5px]
      "
    >
      <input
        suppressHydrationWarning
        type="text"
        placeholder="Search for a service"
        className="
          w-full
          bg-transparent
          outline-none
          text-black
          font-normal
          placeholder:text-[#6C6C6C]
          placeholder:font-bold

          text-[14px]            
          lg:text-[16px]          
        "
      />

      <FiSearch
      aria-hidden="true"
        className="
          text-[#00AFE3]
          shrink-0 cursor-pointer

          w-[20px] h-[20px]       
          lg:w-[24px] lg:h-[24px] 
        "
      />
    </div>
  );
}
