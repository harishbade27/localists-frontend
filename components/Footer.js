import Image from "next/image";

export default function Footer() {
  const steps = [
    {
      icon: "/edit.png", className: "text-[#00AFE3]",
      title: "Fill in your details for your project",
    },
    {
      icon: "/users.png", className: "text-[#00AFE3]",
      title: "Receive quotes from Professionals",
    },
    {
      icon: "/file.png", className: "text-[#00AFE3]",
      title: "Compare your quotes and enjoy great savings",
    },
  ];

  return (
    <footer className="w-full bg-[#F7F7F7] pt-[50px] pb-[20px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">

        <h2 className="font-black text-[50px] leading-[55px] tracking-[-0.03em] mb-6">
          <span className="text-[#00A9E0]">How it</span>{" "}
          <span className="text-[#253238]">works.</span>
        </h2>

        <div className="flex justify-between gap-[40px] mt-10 mb-[40px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                w-[320px] h-[320px]
                border-4 border-[#DBDFE4]
                rounded-[20px]
                flex flex-col
                items-center
                justify-center
                text-center
                px-6
              "
            >
              <div className="mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={90}
                  height={80}
                  priority
                />
              </div>

              <p className="text-[38px] font-extrabold text-[#253238] leading-[38px]">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-[20px]">
          <button
            className="
              bg-[#10C87B]
              text-white
              text-[14px]
              font-semibold
              px-6 py-2
              rounded-full
              hover:bg-[#27ae60]
              transition
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
}
