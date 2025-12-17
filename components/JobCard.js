import Image from "next/image";

export default function JobCard({ title, image }) {
  return (
    <div
      className="
        relative
        flex-none
        w-[240px] h-[320px]
        bg-[#00A9E0]
        rounded-[18px]
        p-[4px]
      "
    >
      <div
        className="
          absolute
          bottom-[-4px] right-[0px]
          w-[200px] h-[260px]
          overflow-hidden
          rounded-tl-[23.02px]
          rounded-br-[23.02px]
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-white text-[14px] font-semibold">
          {title}
        </h3>
      </div>

      <button
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2 z-10
          bg-white
          text-[#253238]
          text-[14px] font-bold
          px-4 py-1.5
          rounded-full
        "
      >
        Explore
      </button>
    </div>
  );
}
