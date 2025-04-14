import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import type { Swiper as SwiperType } from 'swiper';

const testimonials = [
  {
    name: "Prakash",
    company: "Kalyani Motors, Banglore",
    quote:
      "Our drivers love Sidekick. They speed up vehicle transfers and reduce costs, making our day-to-day operations smoother and more efficient...",
    image: "/scooter.png",
    videoUrl: "#",
  },
  {
    name: "Ayesha",
    company: "GreenGo Electric, Delhi",
    quote:
      "With Sidekick, our fleet management has become way more organized. It's a game changer for us.",
    image: "/scooter.png",
    videoUrl: "#",
  },
];

export default function TestimonialCarousel() {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section>
      <div className="relative max-w-7xl mx-auto my-16 py-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#F5F9FF] rounded-lg flex flex-col w-full md:flex-row items-stretch gap-4">
                <img
                  src={t.image}
                  alt="testimonial"
                  className="w-full max-w-sm bg-gray-400 aspect-square rounded-lg object-cover"
                />
                <div className="flex-1 flex flex-col justify-between px-4 py-10 pr-10">
                  <p className="text-4xl leading-tight text-gray-800">“{t.quote}”</p>
                  <div className='flex items-end justify-between'>
                    <div className='text-sidekick-blue'>
                      <p className="font-semibold text-3xl">{t.name}</p>
                      <p className="text-lg">{t.company}</p>
                    </div>
                    <a
                      href={t.videoUrl}
                      className="block px-6 py-3 font-semibold bg-blue-500 text-white rounded-full"
                    >
                      Watch video
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows (wired up now) */}
        <div className='flex items-center justify-between w-full py-6 mt-4'>
          <div className="">
            <button
              className="bg-sidekick-green p-4 rounded-xl"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft size={24} className='text-black font-bold' />
            </button>
          </div>
          <div className="">
            <button
              className="bg-sidekick-green p-4 rounded-xl"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight size={24} className='text-black font-bold' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
