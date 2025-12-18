import HeroSearchBar from "./HeroSearchbar";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#00AFE3]">
      <div
        className="
          flex flex-col gap-10
          px-4 py-10

          lg:max-w-[1440px]
          lg:mx-auto
          lg:px-[180px]
          lg:py-[64px]
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div className="max-w-full lg:max-w-[520px]">

          <div
            className="
              inline-flex items-center
              gap-[8px]
              bg-[#A8E4F6]
              px-[18px] py-[8px]
              rounded-3xl
              mb-6
            "
          >
            <span className="text-[18px] leading-[22px] font-bold text-[#253238]">
              Excellent
            </span>

            <div className="flex items-center gap-[2px]">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                  key={index}
                  className="
                    w-[20px] h-[20px]
                    flex items-center justify-center
                    bg-[#00B67A]
                    rounded-[3px]
                  "
                >
                  <span className="text-white text-[14px] leading-[14px]">
                    ★
                  </span>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center text-[#00B67A] mb-1 text-[24px]">
              ★
              <span className="text-[15px] leading-[22px] mt-1 font-semibold text-[#253238]">
                Trustpilot
              </span>
            </span>
          </div>

          <h1
            className="
              text-[40px] leading-[44px]
              font-bold text-white mb-4

              lg:text-[81px]
              lg:leading-[75px]
            "
          >
            Find Local <br />
            Services. <span className="text-[#253238]">Fast.</span>
          </h1>

          <p
            className="
              text-[16px] leading-[20px]
              text-white font-semibold mb-8

              lg:text-[20px]
            "
          >
            Get instant quotes from local professionals.
          </p>

          <HeroSearchBar />
        </div>

        <div className="max-w-full lg:max-w-[420px]">
          <p className="text-white font-semibold mb-4">
            Popular Services:
          </p>

          <div className="flex flex-wrap gap-[10px]">
            {[
              "Landscapers",
              "Patio Layers",
              "Private Tutors",
              "Fence & Gate Installers",
              "Personal Trainers",
              "Tree Surgeons",
              "Architects",
              "Painter Decorators",
              "Airport Transfers",
              "Physics and Maths Tutors",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4 py-2
                  rounded-3xl
                  border-2 border-white
                  font-semibold
                  text-[14px] leading-[18px]
                  text-white
                  cursor-pointer
                  transition
                  hover:bg-white hover:text-[#00A9E0]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
