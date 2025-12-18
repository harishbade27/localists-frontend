import Image from "next/image";

export default function JobCard({ title, image }) {
  return (
    <div
      className="
        relative
        flex-none
        bg-[#00A9E0]
        rounded-[18px]
        p-[4px]

        w-[260px] h-[300px]
        lg:w-[240px] lg:h-[320px]
      "
    >
      <div
        className="
          absolute
          overflow-hidden
          rounded-tl-[23.02px]
          rounded-br-[23.02px]

          bottom-[-2px] right-0
          w-[200px] h-[250px]

          lg:bottom-[-4px]
          lg:w-[200px] lg:h-[260px]
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

      <div className="absolute top-3 left-3 z-10 lg:top-4 lg:left-4">
        <h3 className="text-white text-[13px] lg:text-[14px] font-semibold">
          {title}
        </h3>
      </div>

      <button
        className="
          absolute left-1/2 -translate-x-1/2 z-10
          bg-white
          text-[#253238]
          font-bold
          rounded-full

          bottom-3 px-3 py-1 text-[13px]
          lg:bottom-4 lg:px-4 lg:py-1.5 lg:text-[14px]
        "
      >
        Explore
      </button>
    </div>
  );
}
