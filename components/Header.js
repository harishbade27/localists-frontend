import Image from "next/image";
import SearchBar from "./SearchBar";
import { FiChevronDown, FiUser, FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header role="banner" className="w-full bg-white border-b">
      <div
        className="
          flex items-center justify-between
          px-4 h-[64px]

          lg:px-[120px]
          lg:h-[72px]
          lg:max-w-[1440px]
          lg:mx-auto
        "
      >
        <div className="flex items-center w-[160px] cursor-pointer">
          <Image
            src="/logo.png"
            alt="Localists Logo"
            width={160}
            height={29}
            priority
          />
        </div>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-[21px] w-[367px] -ml-[250px]">
          <a
            href="#"
            className="
              flex items-center gap-[6px]
              text-[16px] leading-[20px] font-bold
              text-[#253238]
              hover:text-[#00A9E0]
              transition
            "
          >
            <span>Explore Our Services</span>
            <FiChevronDown size={22} className="text-[#00AFE3]" />
          </a>

          <a
            href="#"
            className="
              flex items-center gap-[6px]
              text-[16px] leading-[20px] font-bold
              text-[#253238]
              hover:text-[#00A9E0]
              transition
            "
          >
            <span>Advice</span>
            <FiChevronDown size={22} className="text-[#00AFE3]" />
          </a>
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          <button className="hidden lg:block text-[14px] font-medium text-[#0F172A] hover:text-[#00AFE3]">
            Login
          </button>

          <button
            className="
              hidden lg:flex
              items-center gap-[6px]
              bg-[#00AFE3] text-white
              text-[14px] font-medium
              px-4 py-[6px]
              rounded-full
              hover:bg-[#0095c6]
              transition
            "
          >
            <FiUser size={14} />
            <span>Sign Up</span>
          </button>

          <button className="lg:hidden text-[#253238]">
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
