import Hero from "../assets/home-hero.jpeg";
import zigzagUnderline from "../assets/zigzag.svg"
import CTABanner from "../common/CTABanner";
import SidekickUsageSteps from "../components/SidekickUsageSteps";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Home = () => {
  return (
    <>
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

          {/* Text Content  + CTA */}
          <div className="md:space-y-10 space-y-4 relative max-w-7xl mx-auto md:w-[80vw] z-10 pb-10 px-6 md:px-0">
            <p className="text-center mx-auto text-2xl font-bold md:mx-0 md:text-left md:text-5xl md:w-2/3 text-white md:font-semibold leading-snug drop-shadow-md">
              For all feet struggling,<br />
              we have a fleet to keep <br />
              you moving.
            </p>
            <a className="font-medium text-lg bg-sidekick-green px-6 py-3 block w-max rounded-full md:mx-0 mx-auto" href="#">
              Get the App
            </a>
          </div>
        </div>
      </div>

      {/* Blue Section text */}
      <section className=" space-y-6 md:space-y-12 relative max-w-7xl mx-auto  py-12 px-6 md:px-0">
        <h3 className="text-sidekick-blue text-xl md:text-3xl  md:py-6 text-center tracking-wide">
          We want you to make the most of every moment. Let Sidekick<br className="hidden md:inline" /> handle the last mile so you can focus on what really matters.
        </h3>

        <div className="relative w-max mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold z-10">
            See Sidekick in Action
          </h2>
          <img src={zigzagUnderline} alt="" aria-hidden className="relative select-none block ml-auto left-6 bottom-3" />
        </div>

        <SidekickUsageSteps />
      </section>
      <section className="px-5 md:px-0">
        <TestimonialCarousel />
      </section>
      <CTABanner />

    </>
  )
}

export default Home