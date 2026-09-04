import React, { useRef } from "react";
import Headers from "../components/3D_models/Headers";
import { aboutCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shimmering } from "../components/effects/Shimmer";
import ImageLine from "../components/models/ImageLine";

gsap.registerPlugin(ScrollTrigger);

const MySelf = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card", sectionRef.current).forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "left left",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    const timeline = sectionRef.current.querySelector(".timeline");

    gsap.to(timeline, {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current.querySelector(".timeline"),
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(timeline, {
            scaleY: 1 - self.progress,
            overwrite: true,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Headers title="About Me" sub="A Brief Introduction" />

        <div className="mt-32 relative">

          <div className="absolute inset-0 z-10 pointer-events-none">
            <ImageLine />
          </div>
          <div className="relative xl:space-y-32 space-y-10">
            {aboutCards.map((card, index) => (
  <div key={card.title} className="exp-card-wrapper relative">
    <div className="exp-left">
      <GlowCard card={card} index={index} variant="about">
      </GlowCard>
    </div>

    <div className="timeline-wrapper">
      <div className="timeline" />
      <div className="gradient-line" />
    </div>

    <div className="exp-right">
      <div className="expText">
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <ImageLine />
          </div>
        <div>
          <h1 className="font-semibold text-3xl">
            <Shimmering>{card.title}</Shimmering></h1>
          <p className="text-[#839cb5] italic">Overview</p>
          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
            {card.responsibilities.map((r) => (
              <li key={r} className="text-lg">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default MySelf;
