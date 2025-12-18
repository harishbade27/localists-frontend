import { FiSearch } from "react-icons/fi";

export default function HeroSearchBar() {
  return (
    <div
      className="
        flex items-center justify-between
        bg-white
        w-full
        h-[56px]
        px-4
        rounded-full
        shadow-[0_20px_40px_0_rgba(0,0,0,0.5)]

        lg:w-[404px]
        lg:h-[72.09px]
        lg:px-[22.53px]
        lg:py-[13.86px]
        lg:rounded-[138.63px]
      "
    >
      <input
        suppressHydrationWarning
        type="text"
        placeholder="Search for a service"
        className="
          w-full
          bg-transparent
          text-[16px]
          leading-[20px]
          font-normal
          text-black
          outline-none
          placeholder:text-[#6C6C6C]
          placeholder:font-bold

          lg:text-[25px]
          lg:leading-[28px]
        "
      />

      <FiSearch
        aria-hidden="true"
        size={24}
        className="
          text-[#00AFE3]
          cursor-pointer
          shrink-0

          lg:text-[33px]
        "
      />
    </div>
  );
}
