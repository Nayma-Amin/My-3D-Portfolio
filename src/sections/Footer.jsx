import React from 'react'
import { Shimmering } from '../components/effects/Shimmer'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>

            <div className='flex flex-col justify-center md:items-start items-center'>
                <a href="https://github.com/Nayma-Amin"><Shimmering>Visit My GitHub Profile</Shimmering></a>
            </div>
            <div className='socials'>
            </div>

            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    <Shimmering>©{new Date().getFullYear} Nayma Amin Nishy | All rights reserved.</Shimmering>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer