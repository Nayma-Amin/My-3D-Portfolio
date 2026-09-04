import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Headers from "../components/3D_models/Headers";
import ImageCloud from "./ImageCloud";

gsap.registerPlugin(ScrollTrigger);

const Display = () => {
  const sectionRef = useRef(null);
  const work1Ref = useRef(null);
  const work2Ref = useRef(null);
  const work3Ref = useRef(null);

  useGSAP(() => {
    const workRefs = [work1Ref.current, work2Ref.current, work3Ref.current];

    workRefs.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="work-display">
      <div className="w-full h-full md:px-20 px-5">
        <Headers title="My Recent Projects" sub="Project Overview" />

        <div className="displaylayout mt-4">
          {/* Left Side : My content */}
          <div className="first-project" ref={work1Ref}>

            <div className="image-wrapper">
                <img className="object-contain" src="/images/brotherstaxi.png" alt="Brothers Taxi" />
            </div>
            <div className="text-content">
              <h2>Brothers Taxi</h2>

              <p className="text-white-50 md:text-xl">
                A complete ride-hailing ecosystem connecting passengers and drivers through ride booking, real-time tracking, trip management, payments, and transparent pricing. The rider and driver apps streamline the journey from ride requests and navigation to trip completion.
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="work-list-wrapper overflow-hidden">
            <div className="project" ref={work2Ref}>
              <div className="image-wrapper bg-[#b7d9c8]">
                <img src="/images/softnutrivia.png" alt="Softnutrivia" />
              </div>
            </div>
            <h1>Softnutrivia</h1>
            <p className="text-white-50 md:text-lg">An AI-powered nutrition and meal-tracking application for personalized guidance, calorie and protein tracking, and healthier eating habits.</p>

            <div className="project" ref={work3Ref}>
              <div className="image-wrapper bg-[#1fb8a3]">
                <img src="/images/artisan.png" alt="Artisan SA" />
              </div>
            </div>
            <h1>Artisan SA</h1>
            <p className="text-white-50 md:text-lg">A digital marketplace connecting customers with verified artisans and service professionals across South Africa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
