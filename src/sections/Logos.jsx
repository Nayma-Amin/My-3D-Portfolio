import React from 'react'
// import { logoIconsList } from '../../constants' // comment out if not needed

// const LogoIcon = ({ icon }) => {
//     return (
//         <div className="flex-non flex-center mar-item">
//             <img src={icon.imgPath} alt={icon.name} />
//         </div>
//     )
// }

const Logos = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="mar h-52">
        <div className="mar-box md:gap-12 gap-5">
          {/* logo list display
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon}/>
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon}/>
          ))} */}

          <h1 className="text-xl font-semibold whitespace-nowrap animate-marquee">
            Welcome to My Portfolio — This portfolio has been created to show my skills in React.js, Three.js, GSAP, TailwindCSS and 3D model handling. 
            These simple yet elegant design reflects my approach to web development, 
            focusing on both aesthetics and functionality. Explore the various sections to learn more about my projects, experience, and how I can contribute to your team.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Logos