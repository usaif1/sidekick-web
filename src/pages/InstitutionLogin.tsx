import Hero from "../assets/institution-hero.jpeg"
import HeroForegroundImg from "../assets/institution-foreground.png"

// Icons for Partnering Up benefits
import benefit1 from "../assets/partnering-benefits/benefit1.png"
import benefit2 from "../assets/partnering-benefits/benefit2.png"
import benefit3 from "../assets/partnering-benefits/benefit3.png"
import CTABanner from "../common/CTABanner"

const InstitutionLogin = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col grow items-stretch justify-center min-h-svh">
        <div className="relative flex flex-col justify-start md:justify-center grow pt-20">
          {/* Background Image */}
          <img
            src={Hero}
            alt="Sidekick Hero Image"
            className="h-full w-full object-top object-cover absolute top-0 left-0 z-0"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0"></div>
          {/* =Foreground Image */}
          <img src={HeroForegroundImg} alt="Sidekick App Screenshot" className="md:h-[85vh] md:w-[55%] object-contain absolute object-bottom bottom-0 md:right-32" />

          {/* Text Content  + CTA */}
          <div className="grow h-1/2 pt-[10vh] md:h-auto md:space-y-10 space-y-4 relative max-w-7xl mx-auto md:w-[80vw] z-10 pb-10 px-6 md:px-0">
            <p className="text-center mx-auto text-2xl font-bold md:mx-0 md:text-left md:text-5xl md:w-2/3 text-white md:font-semibold leading-snug drop-shadow-md">
              Let us be your<br />
              Sidekick!
            </p>
            <button className="font-medium text-lg md:bg-sidekick-green bg-white px-8 py-3 rounded-full">
              Institution Log In
            </button>
          </div>
        </div>

        {/* Why partner with us? */}
      </div>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto md:w-[80vw]">
          <h2 className="md:text-4xl text-3xl text-center font-semibold mt-10 mb-20">Why Partner With Us?</h2>
          <div className="md:grid md:grid-cols-3 space-y-12 md:space-y-0">
            {/* benefit */}
            <div className="text-center">
              <img src={benefit1} alt="SAAS" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold pt-1">SAAS</h4>
              <p className="max-w-56 pt-2 mx-auto leading-snug">Scooter as a Service</p>
            </div>
            {/* benefit */}
            <div className="text-center">
              <img src={benefit2} alt="Enhanced Mobility" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold pt-1">Enhanced Mobility</h4>
              <p className="max-w-56 pt-2 mx-auto leading-snug">Provide reliable, hassle-free rides that boost productivity and satisfaction</p>
            </div>
            {/* benefit */}
            <div className="text-center">
              <img src={benefit3} alt="Centralized Control" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold pt-1">Centralized Control</h4>
              <p className="max-w-56 pt-2 mx-auto leading-snug">Manage all your transportation needs in one place</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default InstitutionLogin