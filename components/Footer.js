import Image from "next/image";

export default function Footer() {
  const steps = [
    {
      icon: "/edit.png",
      title: "Fill in your details for your project",
    },
    {
      icon: "/users.png",
      title: "Receive quotes from Professionals",
    },
    {
      icon: "/file.png",
      title: "Compare your quotes and enjoy great savings",
    },
  ];

  return (
    <footer role="contentinfo" className="w-full bg-[#F7F7F7] pt-[50px] pb-[20px]">
      <div
        className="
          mx-auto
          px-4

          lg:max-w-[1440px]
          lg:px-[120px]
        "
      >
        <h2
          className="
            font-black
            tracking-[-0.03em]
            mb-6

            text-[34px] leading-[38px]
            lg:text-[50px] lg:leading-[55px]
          "
        >
          <span className="text-[#00A9E0]">How it</span>{" "}
          <span className="text-[#253238]">works.</span>
        </h2>

        <div
          className="
            flex flex-col gap-6 mt-10 mb-[40px]

            lg:flex-row
            lg:justify-between
            lg:gap-[40px]
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                border-4 border-[#DBDFE4]
                rounded-[20px]
                flex flex-col
                items-center
                justify-center
                text-center
                px-6

                w-full h-[260px]

                lg:w-[320px] lg:h-[320px]
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

              <p
                className="
                  font-extrabold
                  text-[#253238]

                  text-[26px] leading-[30px]
                  lg:text-[38px] lg:leading-[38px]
                "
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-[20px]">
          <button
            className="
              bg-[#10C87B]
              text-white
              font-semibold
              rounded-full
              hover:bg-[#27ae60]
              transition

              text-[14px]
              px-6 py-2
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
}
