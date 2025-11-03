import { useRef, useState, useEffect } from "react"
import { btItems } from "../constants"
import CountUp from "react-countup"
import { Shimmering } from "./effects/Shimmer"

const AnimatedBt = () => {
  const [startCount, setStartCount] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true)
          }
        })
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <div id="bt" ref={sectionRef} className="padding-x-lg xl:mt-0 mt-0">
      <div className="mx-auto grid-4-cols overflow-x-hidden">
        {btItems.map((item, index) => (
          <div
            key={index}
            className="bg-teal-900 rounded-lg p-10 flex flex-col justify-center items-center text-center gap-2"
          >
            <div className="bt-number text-white-50 text-5xl font-bold mb-2">
              {startCount ? (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  suffix={item.suffix}
                />
              ) : (
                "0" + (item.suffix || "")
              )}
            </div>
            <div className="text-white-50 text-lg">
              <Shimmering>{item.context}</Shimmering></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedBt