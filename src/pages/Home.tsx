import Hero from "../assets/home-hero.jpeg";
import zigzagUnderline from "../assets/zigzag.svg"
import CTABanner from "../common/CTABanner";
import SidekickUsageSteps from "../components/SidekickUsageSteps";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
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

          {/* Text Content  + CTA */}
          <div className="space-y-12 relative max-w-7xl mx-auto w-[80vw] z-10">
            <p className="text-5xl w-2/3 text-white font-semibold leading-snug drop-shadow-md">
              For all feet struggling,<br />
              we have a fleet to keep <br />
              you moving.
            </p>
            <a className="font-medium text-lg bg-[#18F27A] px-4 py-3 rounded-full" href="#">
              Get the App
            </a>
          </div>
        </div>
      </div>

      {/* Blue Section text */}
      <section className="space-y-12 relative max-w-7xl mx-auto  py-12">
        <h3 className="text-[#296AEB] text-3xl italic py-6 text-center tracking-wide">
          We want you to make the most of every moment. Let Sidekick<br /> handle the last mile so you can focus on what really matters.
        </h3>

        <div className="relative w-max mx-auto">
          <h2 className="text-center text-4xl font-bold z-10">See Sidekick in Action</h2>
          <img src={zigzagUnderline} alt="" aria-hidden className="relative select-none block ml-auto left-6 bottom-3" />
        </div>

        <SidekickUsageSteps />
      </section>

      <CTABanner />

    </>
  )
}

export default Home