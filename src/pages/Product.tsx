import Hero from "../assets/product-hero.jpeg"
import zigzagUnderline from "../assets/zigzag.svg"
import FoldedScooterInfo from "../components/FoldedScooterInfo"
import UnfoldedScooterInfo from "../components/UnfoldedScooterInfo"


import Upcomging1Img from "../assets/product/upcoming1.png"
import Upcomging2Img from "../assets/product/upcoming2.png"
import CTABanner from "../common/CTABanner"

const Product = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col grow items-stretch justify-center min-h-svh">
        <div className="relative flex flex-col justify-end grow pt-20">
          {/* Background Image */}
          <img
            src={Hero}
            alt="Sidekick Hero Image"
            className="h-svh w-full md:object-top object-cover object-[28%] absolute top-0 left-0 z-0"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 h-full w-full md:bg-black/30 bg-black/40  z-0"></div>

          {/* Text Content + CTA */}
          <div className="md:space-y-10 space-y-4 relative max-w-7xl mx-auto md:w-[80vw] z-10 pb-10 px-6 md:px-0">
            <p className="text-center mx-auto text-2xl font-bold md:mx-0 md:text-left md:text-5xl md:w-2/3 text-white md:font-semibold leading-snug drop-shadow-md">
              Built for the Streets,<br />
              the ride you always <br className="md:hidden inline" /> needed.
            </p>
            <a className="font-medium text-lg bg-sidekick-green px-6 py-3 block w-max rounded-full md:mx-0 mx-auto" href="#">
              Get the App
            </a>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto my-16 py-8">
        <div className="relative w-max mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold z-10">See Our Product</h2>
          <img src={zigzagUnderline} alt="" aria-hidden className="relative select-none block ml-auto left-6 bottom-3 md:max-w-sm max-w-40" />
        </div>

        {/* Scooter Image */}
        <div className="relative px-5 flex md:flex-row gap-6 md:gap-2 flex-col items-end justify-center">
          <p className="hidden md:block text-gray-500 absolute w-full text-right top-10 right-56 select-none">Hover over parts the parts to check their details</p>
          <UnfoldedScooterInfo />

          <div className="relative hidden md:block top-10 self-center pr-14 -ml-12">
            <svg width="68" height="45" viewBox="0 0 68 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.367 0L21.7357 9.42308L0.5 30.7821L11.6532 42L32.8889 20.641L53.5 0H12.367Z" fill="#86A0CA" />
              <path d="M55.613 45L46.2285 35.597L67.5 14.2836L56.328 3L35.0565 24.3134L14.5 45H55.613Z" fill="#86A0CA" />
            </svg>
          </div>

          <FoldedScooterInfo />
        </div>
      </section>


      {/* Upcoming products */}
      <section className="max-w-7xl md:w-[80vw] px-6 mx-auto md:py-16 md:my-16 my-8 py-8">
        <h2 className=" text-center text-3xl md:text-4xl font-bold z-10  text-sidekick-blue">Upcoming Products</h2>

        <div className="md:flex space-y-8 md:space-y-0 items-center justify-center gap-10 my-8 py-6 max-w-screen ">
          <img src={Upcomging1Img} alt="Upcoming Scooter" />
          <div className="h-56 border hidden md:block border-gray-100 "></div>
          <img src={Upcomging2Img} alt="Upcoming Scooter" />
        </div>

      </section>


      <CTABanner />

    </div>
  )
}

export default Product