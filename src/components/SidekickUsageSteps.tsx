import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import slide1Img from "../assets/swiper-slides/Slide1.png"
import slide2Img from "../assets/swiper-slides/Slide2.png"
import slide3Img from "../assets/swiper-slides/Slide3.png"

const SidekickUsageSteps = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [isReady, setIsReady] = useState(false)

  // Wait for refs to be attached
  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <div className="relative max-w-7xl md:w-[80vw] mx-auto bg-sidekick-green rounded-xl">
      {isReady && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          <SwiperSlide>
            <div className="md:max-h-[60vh] relative flex-col-reverse gap-6 md:gap-0 flex md:flex-row items-center md:px-12 px-5">
              <div className='bg-white md:w-1/2 w-full md:space-y-4 md:px-6 px-4 py-4 md:py-8 relative rounded-lg md:rounded-xl md:mb-0 mb-22'>
                <h6 className='font-semibold text-sidekick-blue'>Step 1</h6>
                <p className='text-2xl md:text-4xl font-semibold'>Let's hit the Streets</p>
              </div>
              <img src={slide1Img} alt="person riding Sidekick" className='relative ml-auto' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="md:max-h-[60vh] relative flex-col-reverse gap-6 md:gap-0 flex md:flex-row items-center md:px-12 px-5">
              <div className='bg-white md:w-1/2 w-full md:space-y-4 md:px-6 px-4 py-4 md:py-8 relative rounded-lg md:rounded-xl md:mb-0 mb-22'>
                <h6 className='font-semibold text-sidekick-blue'>Step 2</h6>
                <p className='text-2xl md:text-4xl font-semibold'>Fold. Lift. You're good to go</p>
              </div>
              <img src={slide2Img} alt="person holding Sidekick" className='relative ml-auto' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="md:max-h-[60vh] relative flex-col-reverse gap-6 md:gap-0 flex md:flex-row items-center md:px-12 px-5">
              <div className='bg-white md:w-1/2 w-full md:space-y-4 md:px-6 px-4 py-4 md:py-8 relative rounded-lg md:rounded-xl md:mb-0 mb-22'>
                <h6 className='font-semibold text-sidekick-blue'>Step 3</h6>
                <p className='text-2xl md:text-4xl font-semibold'>Freedom fits in your boot</p>
              </div>
              <img src={slide3Img} alt="Sidekick in Car" className='relative ml-auto top-4' />
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div className="absolute w-full z-20 flex gap-4 justify-between mt-4 px-5 md:px-10 bottom-6 md:pb-4">
        <button ref={prevRef} className="cursor-pointer w-full flex items-center justify-center  max-w-3xs bg-sidekick-green py-3 border-2 rounded-lg border-white">
          <ArrowLeft size={24} />
        </button>
        <button ref={nextRef} className="cursor-pointer w-full flex items-center justify-center max-w-3xs bg-sidekick-green py-3 border-2 rounded-lg border-white">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default SidekickUsageSteps
