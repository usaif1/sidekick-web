import Hero from "../assets/offering-hero.jpeg"
import zigzagUnderline from "../assets/zigzag.svg"

import offeringIcon1 from "../assets/offerings/offering1.png"
import offeringIcon2 from "../assets/offerings/offering2.png"
import offeringIcon3 from "../assets/offerings/offering3.png"
import CTABanner from "../common/CTABanner"

import { useModalStore } from "../globalStore/modalStore"

const Offerings = () => {
  const { openModal } = useModalStore();

  return (
    <>
      <div className="flex flex-col grow items-stretch justify-center min-h-svh">
        <div className="relative flex flex-col justify-center grow pt-20">
          {/* Background Image */}
          <img
            src={Hero}
            alt="Sidekick Hero Image"
            className="h-full w-full object-top object-cover absolute top-0 left-0 z-0"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-0"></div>

          {/* Text Content + CTA*/}
          <div className="space-y-12 relative max-w-7xl mx-auto md:w-[80vw] z-10">
            <p className="text-5xl w-2/3 text-white font-semibold leading-snug drop-shadow-md">
              Now we Go, because< br />
              every second counts.
            </p>
            <a className="font-medium text-lg bg-sidekick-green px-5 py-3 rounded-full" href="#">
              Get the App
            </a>
          </div>
        </div>
      </div>

      <section className="space-y-12 relative max-w-7xl mx-auto py-12 mb-16 mt-10">
        <h3 className="text-sidekick-blue text-3xl  py-6 text-center tracking-wide">
          From city streets to campus corridors and business fleets,<br />
          we redefine how you cover the final leg of your journey.
        </h3>

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

        <div className="space-y-10 pt-6">
          <h3 className="text-center text-xl">We shorten the kicks between your travel spots, let&#39;s do this together</h3>
          <button
            className="font-medium text-lg bg-sidekick-green mx-auto block px-7 py-3 rounded-full"
            onClick={() => openModal("partnerForm")}
          >
            Partner With Us
          </button>
        </div>
      </section >

      <CTABanner />
    </>
  )
}

export default Offerings