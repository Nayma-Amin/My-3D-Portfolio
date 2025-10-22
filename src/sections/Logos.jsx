import React from 'react'
import Headers from '../components/3D_models/Headers'
import { logoIconsList } from '../constants'

const LogoIcon = ({ icon }) => {
  return (
    <div className="mar-item">
      <img src={icon.imgPath} alt={icon.name} />
      <p className="text-sm font-semibold">{icon.name}</p>
      <p className="text-xs text-gray-400">{icon.percentage}%</p>
    </div>
  )
}

const Logos = () => {
  return (
    <section id="skills">
        <Headers
          title="My Skills"
          sub="Technologies I Work With"
        />

        <div className="mt-20 relative">
          <div className="gradient-edge" />
          <div className="gradient-edge" />

          <div className="mar h-52">
            <div className="mar-box">
              {logoIconsList.map((icon) => (
                <LogoIcon key={icon.name} icon={icon} />
              ))}
              {logoIconsList.map((icon) => (
                <LogoIcon key={`${icon.name}-dup`} icon={icon} />
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Logos