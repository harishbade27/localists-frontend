"use client";
import { useState, useEffect, useRef } from "react";
import JobCard from "./JobCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PopularJobs() {
  const jobs = [
    { title: "Tree Surgeon", image: "/image4.jpg" },
    { title: "Landscaper", image: "/image3.jpg" },
    { title: "Personal Trainer", image: "/image2.jpg" },
    { title: "Driveways", image: "/image1.jpg" },
    { title: "Painter Decorators", image: "/image5.jpg" },
    { title: "Physics and Maths Tutors", image: "/image6.jpg" },
    { title: "Architects", image: "/image7.jpg" },
    { title: "Airport Transfers", image: "/image8.jpg" },
  ];

  const mobileRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mobileRef.current) return;

      const cardWidth = 260 + 16;
      const next = (mobileIndex + 1) % jobs.length;

      mobileRef.current.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      });

      setMobileIndex(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [mobileIndex]);

  const handleMobileScroll = () => {
    if (!mobileRef.current) return;
    const cardWidth = 260 + 16;
    setMobileIndex(
      Math.round(mobileRef.current.scrollLeft / cardWidth)
    );
  };

  const CARD_WIDTH = 240;
  const GAP = 20;
  const VISIBLE = 4;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;
  const VIEWPORT_WIDTH = VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP;
  const TOTAL_PAGES = jobs.length - VISIBLE + 1;

  const slides = [
    ...jobs.slice(-VISIBLE),
    ...jobs,
    ...jobs.slice(0, VISIBLE),
  ];

  const [slideIndex, setSlideIndex] = useState(VISIBLE);
  const [dotIndex, setDotIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slideIndex === slides.length - VISIBLE) {
      setTimeout(() => {
        setAnimate(false);
        setSlideIndex(VISIBLE);
      }, 500);
    }

    if (slideIndex === 0) {
      setTimeout(() => {
        setAnimate(false);
        setSlideIndex(slides.length - VISIBLE * 2);
      }, 500);
    }
  }, [slideIndex, slides.length]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  const handleNext = () => {
    setSlideIndex((p) => p + 1);
    setDotIndex((p) => (p + 1) % TOTAL_PAGES);
  };

  const handlePrev = () => {
    setSlideIndex((p) => p - 1);
    setDotIndex((p) => (p === 0 ? TOTAL_PAGES - 1 : p - 1));
  };

  return (
    <section className="w-full bg-white py-[30px]">
      <div className="mx-auto px-4 lg:px-[120px] lg:max-w-[1440px]">

        <h2 className="font-black text-[36px] lg:text-[50px] mb-6">
          <span className="text-[#00A9E0]">Popular</span>{" "}
          <span className="text-[#253238]">jobs.</span>
        </h2>

        <div className="lg:hidden">
          <div
            ref={mobileRef}
            onScroll={handleMobileScroll}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              scroll-smooth pb-4
              [&::-webkit-scrollbar]:hidden
            "
          >
            {jobs.map((job) => (
              <div key={job.title} className="snap-center shrink-0">
                <JobCard {...job} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-3">
            {jobs.map((_, i) => (
              <span
                key={i}
                className={`transition-all ${i === mobileIndex
                    ? "w-[22px] h-[5px] bg-[#253238]"
                    : "w-[6px] h-[6px] bg-[#C4C4C4]"
                  } rounded-full`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-end gap-2 mb-4">
            <button aria-label="Previous jobs" onClick={handlePrev} className="w-[32px] h-[32px] bg-[#A8E4F6] rounded-full flex items-center justify-center">
              <FiChevronLeft />
            </button>
            <button aria-label="Next jobs" onClick={handleNext} className="w-[32px] h-[32px] bg-[#A8E4F6] rounded-full flex items-center justify-center">
              <FiChevronRight />
            </button>
          </div>

          <div className="overflow-hidden mx-auto" style={{ width: VIEWPORT_WIDTH }}>
            <div
              className={`flex gap-[20px] ${animate ? "transition-transform duration-500" : ""}`}
              style={{ transform: `translateX(-${slideIndex * SLIDE_WIDTH}px)` }}
            >
              {slides.map((job, i) => (
                <JobCard key={i} {...job} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <span
                key={i}
                className={`${i === dotIndex ? "w-[28px] h-[6px] bg-[#253238]" : "w-[8px] h-[8px] bg-[#C4C4C4]"} rounded-full`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
