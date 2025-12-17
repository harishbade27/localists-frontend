"use client";
import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [mounted]);


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
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  const handleNext = () => {
    setSlideIndex((prev) => prev + 1);
    setDotIndex((prev) => (prev + 1) % TOTAL_PAGES);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => prev - 1);
    setDotIndex((prev) => (prev === 0 ? TOTAL_PAGES - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-[30px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">

        <h2 className="font-black text-[50px] leading-[55px] tracking-[-0.03em] mb-6">
          <span className="text-[#00A9E0]">Popular</span>{" "}
          <span className="text-[#253238]">jobs.</span>
        </h2>

        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={handlePrev}
            className="w-[32px] h-[32px] rounded-full bg-[#A8E4F6] flex items-center justify-center hover:bg-[#7fd3eb]"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="w-[32px] h-[32px] rounded-full bg-[#A8E4F6] flex items-center justify-center hover:bg-[#7fd3eb]"
          >
            <FiChevronRight />
          </button>
        </div>

        <div
          className="overflow-hidden mx-auto"
          style={{ width: `${VIEWPORT_WIDTH}px` }}
        >
          <div
            className={`flex gap-[20px] ${animate ? "transition-transform duration-500 ease-in-out" : ""
              }`}
            style={{
              transform: `translateX(-${slideIndex * SLIDE_WIDTH}px)`,
            }}
          >
            {slides.map((job, i) => (
              <JobCard
                key={`${job.title}-${i}`}
                title={job.title}
                image={job.image}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${i === dotIndex
                ? "w-[28px] h-[6px] bg-[#253238]"
                : "w-[8px] h-[8px] bg-[#C4C4C4]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
