import { Canvas } from "@react-three/fiber";
import DimensionExperience from "../components/3D_models/DimensionExperience";
import AnimatedBt from "../components/AnimatedBt";
import Button from "../components/Button";
import { tags } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { Shimmering } from "../components/effects/Shimmer";
import Image from "../components/Image";

const Nishy = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".nishy-text h1",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 0.5,
      }
    )
  })
  return (
    <section
      id="nishy"
      className="relative overflow-x-hidden w-full max-w-screen p-0"
    >
      <div className=" absolute w-full h-full flex items-center justify-center">
        <Image/>
      </div>

      <div className="nishy-layout p-0">
        {/* Left Side : My content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-5 px-5">
          <div className="flex flex-col gap-5 p-0">
            <figure>
              <div className="nishy-3d-layout">
                <DimensionExperience />
              </div>
            </figure>
            <div className="nishy-text">
              <h1 className="text-2xl sm:text-3xl md:text-4xl">
                <Shimmering>
                    Hi, 
                    This is Nayma Amin Nishy</Shimmering>
              </h1>
              <p className="text-white-50 text-2xl sm:text-3xl md:text-4xl mt-4">
                Showcasing
                <span className="slider text-inherit leading-tight">
                  <span className="textwrapper">
                    {tags.map((tag) => (
                      <span
                        key={tag.text}
                        className="flex items-center gap-1 sm:gap-15 md:gap-5 pb-10"
                      >
                        <img
                          src={tag.imgPath}
                          alt={tag.text}
                          className="rounded-full bg-white-50
              size-6 sm:size-8 md:size-10 xl:size-12
              p-1 sm:p-1.5 md:p-2"
                        />
                        <span className="text-inherit">{tag.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </p>

              <p className="text-white-50 text-2xl sm:text-3xl md:text-4xl mt-4">
                for Real World Scenarios
              </p>
              <p className="text-white-50 text-2xl sm:text-3xl md:text-4xl mt-4">
                that Provides Solutions.
              </p>
            </div>

            <Fade>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none w-full max-w-[500px] overflow-x-hidden">
              I am a Full Stack developer with a vision and mission to create
              something innovative and revolutionary.
            </p>
            </Fade>
            
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="bt"
              text="Explore My Work!"
            />
          </div>
        </header>
      </div>

      <AnimatedBt />
    </section>
  )
}

export default Nishy