import React, { use } from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
            }
        }
        )
});
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5}
            )
    },
    []);

  return (
    <section id="work" ref={sectionRef} className="work-display">
        <div className="w-full">
    <div className="displaylayout">
        {/* Left Side : My content */}
        <div className="first-project" ref={work1Ref}>
            <div className="image-wrapper">
                <img src="/images/nunchi.png" alt="Nunchi"/>

            </div>
            <div className="text-content">
                <h2>Video Sharing Website (Nunchi)</h2>
                <p className="text-white-50 md:text-xl">
                    Nunchi is a korean word that means "Watching Over". This is fully built using HTML, CSS, PHP, JAVASCRIPT, (AJAX, JQuery) and for Security and Password setups used Composer. For Database used XAMPP and phpmyadmin.
                </p>

            </div>
        </div>
        {/* Right Side */}
        <div className="work-list-wrapper overflow-hidden">
            <div className="project" ref={work2Ref}>
                <div className="image-wrapper bg-[#520806]">
                    <img src="/images/uniblood.png" alt="UniBlood"/>
                </div>
            </div>
                <h1>Blood Donation App (Uni-Blood)</h1>

            <div className="project" ref={work3Ref}>
                <div className="image-wrapper bg-[#1fb8a3]">
                    <img src="/images/lostandfound.png" alt="Lost And Found"/>
                </div>
            </div>
                <h1>Lost And Found App</h1>

        </div>
        </div>
        </div>
    </section>
  )
}

export default Display