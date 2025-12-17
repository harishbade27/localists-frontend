import { FiSearch } from "react-icons/fi";

export default function HeroSearchBar() {
  return (
    <div
      className="
        flex items-center justify-between
        bg-white
        w-[404px] h-[72.09px]
        px-[22.53px] py-[13.86px]
        rounded-[138.63px]
        shadow-[0_20px_40px_0_rgba(0,0,0,0.5)]
      "
    >
      <input
        type="text"
        placeholder="Search for a service"
        className="
          w-full
          bg-transparent
          text-[25px]
          leading-[28px]
          font-normal
          text-black
          outline-none
          placeholder:text-[#6C6C6C]
          placeholder:font-bold
        "
      />

      <FiSearch
        size={33}
        className="text-[#00AFE3] cursor-pointer shrink-0"
      />
    </div>
  );
}
