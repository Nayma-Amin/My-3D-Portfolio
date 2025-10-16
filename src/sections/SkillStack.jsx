import React from 'react'
import { skillStackIcons } from '../constants'
import SkillIcon from '../components/models/skillLogos/SkillIcon'
import Headers from '../components/3D_models/Headers'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const SkillStack = () => {

    useGSAP(() => {
        gsap.fromTo('.skill-card', 
            { 
                y: 50, 
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        )
    })
  return (
    <div id="skills" className="flex-center section-padding">
       <div className="w-full h-full md:px-10 px-5">
        <Headers 
        title="My Favourite Teck Skills"
        sub="My personal Skills"
        />

        <div className="skill-grid">
            {skillStackIcons.map((icon) => (
                <div key={icon.name} 
                className="card-border skill-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="skill-card-content">
                            <div className="skill-card-animated-bg"/>
                            <div className="skill-icon-wrapper">
                                <SkillIcon model={icon}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default SkillStack