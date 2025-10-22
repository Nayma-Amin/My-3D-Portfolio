import React from 'react'
import { Shimmering } from '../effects/Shimmer'

const Headers = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='nishy-badge'>
            <p>{sub}</p>
            </div>
            <div className='font-semibold md:text-5xl text-3xl text-center'>
            <Shimmering>{title}</Shimmering>
            </div> 
            </div>
  )
}

export default Headers