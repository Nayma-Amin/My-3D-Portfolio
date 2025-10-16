import DimensionExperience from "../components/3D_models/DimensionExperience"
import AnimatedBt from "../components/AnimatedBt";
import Button from "../components/Button"
import { tags } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const nishy = () => {
    useGSAP(() => {
        gsap.fromTo(".nishy-text h1", 
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                delay: 0.5
            },
        )
    })
    return (
        <section id="nishy" className="relative overflow-x-hidden w-full max-w-screen p-0">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="nishy-layout p-0">
                {/* Left Side : My content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-5 px-5">
          <div className="flex flex-col gap-7 p-0">
                        <div className="nishy-text">
                            <h1>
                                Showcasing
                                <span className="slider">
                                    <span className="textwrapper">
                                        {tags.map((tag) => (
                                            <span key={tag.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={tag.imgPath} alt={tag.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />

                                                <span>{tag.text}</span>
                                            </span>

                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>for Real World Scenarios</h1>
                            <h1>that Provides Solutions.</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none w-full max-w-[500px] overflow-x-hidden">
                            Hi, This is Nayma Amin Nishy. I am a Full Stack developer with a vision and mission to create something innovative and revolutionary. My goal is to provide solutions to real world scenarios, bridging a gap that is often left unresolved.
                        </p>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="bt"
                            text="Explore My Work!"
                        />
                    
                    {/* Right Side : 3D content */}
                <figure>
                    <div className="nishy-3d-layout">
                        <DimensionExperience />
                    </div>
                </figure>
                    
                    </div>
</header>

            </div>

  <AnimatedBt />

        </section>
    )
}

export default nishy