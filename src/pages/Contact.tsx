import { ArrowDown } from "@phosphor-icons/react"
import zigzagUnderline from "../assets/zigzag.svg"

import mailIcon from "../assets/contact-icons/mail.svg"
import phoneIcon from "../assets/contact-icons/phone.svg"
import locationIcon from "../assets/contact-icons/location.svg"
import CTABanner from "../common/CTABanner"
import Map from "../components/Map"
import FAQ from "../components/FAQ"

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div className="pt-20 bg-sidekick-green">
        <div className="px-6 md:px-0 py-16 flex items-center justify-between max-w-7xl mx-auto md:w-[80vw]">
          <h2 className="text-3xl font-bold md:text-6xl md:font-semibold text-gray-800 tracking-tight">Contact Us</h2>
          <ArrowDown size={36} className="text-white bg-sidekick-blue w-20 h-20 p-4 rounded-full" />
        </div>
      </div>



      {/* Blue Section text */}
      <section className=" space-y-6 md:space-y-12 relative max-w-7xl mx-auto  py-12 px-6 md:px-0">
        <h3 className="text-sidekick-blue text-xl py-3 md:text-3xl  md:py-6 text-center tracking-wide">
          We know you move fast,<br />
          and so should your support.
        </h3>

        <div className="relative w-max mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold z-10">
            Talk to Us
          </h2>
          <img src={zigzagUnderline} alt="" aria-hidden className="hidden md:block relative select-none ml-auto left-6 bottom-3" />
        </div>

        <div className="flex flex-col gap-8 py-4 md:py-0 items-center justify-between md:grid md:grid-cols-3 md:gap-2 place-items-center max-w-5xl mx-auto mb-12">
          <div>
            <img src={mailIcon} alt="mail icon" className="mx-auto mb-4" />
            <a href="mailto:support@sidekick.in" className="block mb-1 text-lg font-semibold">
              support@sidekick.in
            </a>
            <p className="text-center text-sm md:font-normal font-medium text-gray-500">Email</p>
          </div>
          <div>
            <img src={phoneIcon} alt="phone icon" className="mx-auto mb-4" />
            <a href="tel:+91 9538591731" className="block mb-1 text-lg font-semibold">
              +91 9538591731
            </a>
            <p className="text-center text-sm md:font-normal font-medium text-gray-500">Call/WhatsApp</p>
          </div>
          <div>
            <img src={locationIcon} alt="location icon" className="mx-auto mb-4" />
            <p className="block mb-1 text-lg font-semibold">
              Find one near you
            </p>
            <p className="text-center text-sm md:font-normal font-medium text-gray-500">Service Centers</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sidekick-green text-gray-900">
        <div className="px-5  py-10 max-w-7xl mx-auto md:w-[80vw] md:flex space-y-4 md:space-y-0  items-center ">
          <div className="space-y-2">
            <h6 className="font-medium text-2xl md:text-xl md:font-semibold">
              Got an urgent issue?
            </h6>
            <p className="text-lg md:text-base text-gray-800">
              Live chat with our team for real-time assistance.
            </p>
          </div>
          <a href="#"
            className="bg-white rounded-full px-5 py-2.5 block w-max ml-auto font-medium">
            Whatsapp
          </a>
        </div>
      </section>
      <div className="hidden md:block">
        <Map />
      </div>
      <FAQ />
      <CTABanner />
    </div>
  )
}

export default Contact