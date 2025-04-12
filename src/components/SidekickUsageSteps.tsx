import { useRef } from 'react'
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

  return (
    <div className="relative max-w-7xl w-[80vw] mx-auto bg-[#18F27A] rounded-xl">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className=""
      >
        <SwiperSlide>
          <div className=" max-h-[60vh] relative flex items-center px-12">
            <div className='bg-white w-1/2 space-y-4 px-6 py-8 relative rounded-xl'>
              <h6 className='font-semibold text-[#296AEB]'>
                Step 1
              </h6>
              <p className='text-4xl font-semibold'>
                Let's hit the Streets
              </p>
            </div>
            <img src={slide1Img} alt="person riding Sidekick" className='relative ml-auto' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-h-[60vh] relative flex items-center px-12">
            <div className='bg-white w-1/2 space-y-4 px-6 py-8 relative rounded-xl'>
              <h6 className='font-semibold text-[#296AEB]'>
                Step 2
              </h6>
              <p className='text-4xl font-semibold'>
                Fold. Lift. You’re good to go
              </p>
            </div>
            <img src={slide2Img} alt="person holding Sidekick" className='relative ml-auto' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-h-[60vh] relative flex items-center px-12 pr-0">
            <div className='bg-white w-1/2 space-y-4 px-6 py-8 relative rounded-xl'>
              <h6 className='font-semibold text-[#296AEB]'>
                Step 3
              </h6>
              <p className='text-4xl font-semibold'>
                Freedom fits in your boot
              </p>
            </div>
            <img src={slide3Img} alt="Sidekick in Car" className='relative ml-auto top-4' />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute w-full z-20 flex justify-between mt-4 px-10 bottom-6 pb-4">
        <button ref={prevRef} className="cursor-pointer px-16 bg-[#18F27A] py-3 border-2 rounded-lg border-white">
          <ArrowLeft size={24} />
        </button>
        <button ref={nextRef} className="cursor-pointer px-16 bg-[#18F27A] py-3 border-2 rounded-lg border-white">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default SidekickUsageSteps
