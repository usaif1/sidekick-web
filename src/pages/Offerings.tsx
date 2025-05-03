import Hero from "../assets/offering-hero.jpeg"
import zigzagUnderline from "../assets/zigzag.svg"

import offeringIcon1 from "../assets/offerings/offering1.png"
import offeringIcon2 from "../assets/offerings/offering2.png"
import offeringIcon3 from "../assets/offerings/offering3.png"
import CTABanner from "../common/CTABanner"

import { useModalStore } from "../globalStore/modalStore"

// mobile imports
import modalImg1 from '../assets/offerings/CitiesAndCampuses.png'
import modalImg2 from '../assets/offerings/WarehousesAndIndustrialZones.png'
import modalImg3 from '../assets/offerings/DriversAndFleets.png'


const Offerings = () => {
  const { openModal } = useModalStore();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col grow items-stretch justify-center min-h-svh">
        <div className="relative flex flex-col justify-end md:justify-center grow pt-20">

          {/* Background Image */}
          <img
            src={Hero}
            alt="Sidekick Hero Image"
            className="h-svh w-full md:object-top object-cover object-[80%] absolute top-0 left-0 z-0"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 h-full w-full md:bg-black/30 bg-black/40  z-0"></div>

          {/* Text Content + CTA*/}
          <div className="md:space-y-10 space-y-4 relative max-w-7xl mx-auto md:w-[80vw] z-10 pb-10 px-6 md:px-0">
            <p className="text-center mx-auto text-2xl font-bold md:mx-0 md:text-left md:text-5xl md:w-2/3 text-white md:font-semibold leading-snug drop-shadow-md">
              Now we Go, because< br />
              every second counts.
            </p>
            <a className="font-medium text-lg bg-sidekick-green px-6 py-3 block w-max rounded-full md:mx-0 mx-auto" href="#">
              Get the App
            </a>
          </div>
        </div>
      </div>

      <section className=" space-y-6 md:space-y-12 relative max-w-7xl mx-auto  py-12 px-6 md:px-0">
        <h3 className="text-sidekick-blue text-xl md:text-3xl  md:py-6 text-center tracking-wide">
          From city streets to campus corridors and business fleets,<br />
          we redefine how you cover the final leg of your journey.
        </h3>

        <div className="hidden md:block">
          <div className="relative w-max mx-auto">
            <h2 className="text-center text-4xl font-bold relative z-10">See Sidekick in Offerings</h2>
            <img src={zigzagUnderline} alt="" aria-hidden className="relative select-none block ml-auto left-6 bottom-3" />
          </div>
          {/* Offering Cards */}
          <div className="grid grid-cols-3 gap-6 place-content-center pb-10">
            <button className="cursor-pointer"
              onClick={() => openModal("citiesAndCampuses")}
            >
              <div className="rounded-lg border-2 space-y-2 border-sidekick-green hover:bg-sidekick-green  p-10 w-full max-w-sm mx-auto">
                <img src={offeringIcon1} alt="Cities and Campuses" className="mx-auto" />
                <h6 className="text-lg text-center">Cities and Campuses</h6>
              </div>
            </button>
            <button className="cursor-pointer" onClick={() => openModal("warehousesAndIndustrialZones")}>
              <div className="rounded-lg border-2 space-y-2 border-sidekick-green hover:bg-sidekick-green  p-10 w-full max-w-sm mx-auto ">
                <img src={offeringIcon2} alt="Warehouses" className="mx-auto" />
                <h6 className="text-lg text-center">Warehouses</h6>
              </div>
            </button>
            <button className="cursor-pointer" onClick={() => openModal("driversAndFleets")}>
              <div className="rounded-lg border-2 space-y-2 border-sidekick-green hover:bg-sidekick-green  p-10 w-full max-w-sm mx-auto ">
                <img src={offeringIcon3} alt="Drivers" className="mx-auto" />
                <h6 className="text-lg text-center">Drivers</h6>
              </div>
            </button>
          </div>
        </div>


        {/* Modal contents for mobile only */}
        <section className="md:hidden space-y-12 my-6 py-6">
          {/* Cities and Campuses */}
          <div className='md:p-5 md:max-w-[80vw] md:w-max md:max-h-[90vh] -mx-6'>
            <h2 className="text-3xl font-bold text-center text-zinc-800 mb-2 py-4 pt-8">Cities & Campuses</h2>
            <img src={modalImg1} alt="Sidekick for Cities and Campuses" className='w-full h-full' />

            <div className='mt-4 px-5 max-w-md'>
              <p className='text-sidekick-blue text-lg rounded-lg px-7 font-semibold my-6 py-4 bg-[#F5F9FF]'>Your Last Mile, Our First Priority</p>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Where you are and where you need to be. Whether you’re rushing to work, exploring a new city, or moving between classes.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Just pause, scan, and take off.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Give your feet and wallet a break.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warehouses and Industrial Zones */}
          <div className='md:p-5 md:max-w-[80vw] md:w-max md:max-h-[90vh] -mx-6'>
            <h2 className="text-3xl font-bold text-center text-zinc-800 mb-2 py-4 pt-8">Warehouses & Industrial Zones</h2>
            <img src={modalImg2} alt="Sidekick for Warehouses and Industrial Zones" className='w-full h-full' />

            <div className='mt-4 px-5 max-w-md'>
              <p className='text-sidekick-blue text-lg rounded-lg px-7 font-semibold my-6 py-4 bg-[#F5F9FF]'>Get the Goods Moving Faster</p>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Zip through tight logistics timelines with nimble vehicles.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Ideal for first-mile and intra-campus movement.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Boost operational efficiency and reduce downtime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Drivers and Fleets */}
          <div className='md:p-5 md:max-w-[80vw] md:w-max md:max-h-[90vh] -mx-6'>
            <h2 className="text-3xl font-bold text-center text-zinc-800 mb-2 py-4 pt-8">Drivers & Fleets</h2>
            <img src={modalImg3} alt="Sidekick for Drivers and Fleets" className='w-full h-full' />

            <div className='mt-4 px-5 max-w-md'>
              <p className='text-sidekick-blue text-lg rounded-lg px-7 font-semibold my-6 py-4 bg-[#F5F9FF]'>Your Ride, Their Delivery, Everyone Wins</p>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Empower gig workers with efficient, electric mobility.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Fleet-ready solutions with charging and support infra.</p>
                </div>

                <div className='flex items-start gap-4'>
                  <div aria-hidden>
                    {/* Same SVG icon */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                    </svg>
                  </div>
                  <p className='text-zinc-700 leading-snug text-base font-medium'>Maximize earnings, minimize emissions.</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <div className="space-y-10 pt-6">
          <h3 className="md:text-center md:text-xl md:w-full w-4/5 text-xl font-medium">We shorten the kicks between your travel spots, let&#39;s do this together</h3>
          <button
            className="md:font-medium text-lg bg-sidekick-green md:mx-auto ml-auto font-semibold block px-7 py-3 rounded-full"
            onClick={() => openModal("partnerForm")}
          >
            Partner With Us
          </button>
        </div>
      </section >

      <CTABanner />
    </div>
  )
}

export default Offerings