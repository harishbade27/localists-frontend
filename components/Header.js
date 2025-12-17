import Image from "next/image";
import SearchBar from "./SearchBar";
import { FiChevronDown, FiUser } from "react-icons/fi";


export default function Header() {
    return (
        <header className="w-full bg-white border-b">
            <div
                className="
          max-w-[1440px] w-full mx-auto
          flex items-center justify-between
          px-[120px] h-[72px]
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

                <nav className="flex items-center gap-[21px] w-[367px] -ml-[250px]">
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
                        {/* <Image src="/arrow.png" alt="Arrow" width={18} height={12} /> */}
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
                        {/* <Image src="/arrow.png" alt="Arrow" width={18} height={12} /> */}
                        <FiChevronDown size={22} className="text-[#00AFE3]" />

                    </a>
                </nav>

                <div className="flex items-center gap-6">
                    <SearchBar />
                    <button className="text-[14px] font-medium text-[#0F172A] hover:text-[#00AFE3]">
                        Login
                    </button>

                    <button
                        className="
              flex items-center gap-[6px]
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

                </div>
            </div>
        </header>
    );
}
