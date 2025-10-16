import { btItems } from "../constants"
import CountUp from "react-countup"

const AnimatedBt = () => {
  return (
    <div id="bt" className="padding-x-lg xl:mt-0 mt-0">
        <div className="mx-auto grid-4-cols overflow-x-hidden">
            {btItems.map((item) => (
                <div className="bg-teal-900 rounded-lg p-10 flex flex-col justify-center items-center text-center gap-2">
                <div key={btItems.context} className="bt-number 
                text-white-50 text-5xl font-bold mb-2">
                    <CountUp suffix={item.suffix} end={item.value}/>
                </div>
                <div className="text-white-50 text-lg">{item.context}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedBt