import Hero from "../assets/product-hero.jpeg"

const Product = () => {
  return (
    <div className="flex flex-col grow items-stretch justify-center min-h-svh">
      <div className="relative flex flex-col justify-end grow pt-20">
        {/* Background Image */}
        <img
          src={Hero}
          alt="Sidekick Hero Image"
          className="h-full w-full object-top object-cover absolute top-0 left-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-0"></div>

        {/* Text Content + CTA */}
        <div className="space-y-12 relative max-w-7xl mx-auto w-[80vw] z-10 pb-16">
          <p className="text-5xl text-center mx-auto w-2/3 text-white font-semibold leading-snug drop-shadow-md">
            Built for the Streets,<br />
            the ride you always needed.
          </p>
          <a className="font-medium mx-auto block w-max text-lg bg-[#18F27A] px-7 py-3 rounded-full" href="#">
            Get the App
          </a>
        </div>
      </div>
    </div>
  )
}

export default Product