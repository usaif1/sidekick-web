import { X } from "@phosphor-icons/react";
import Logo from "../assets/sidekick3Dlogo.svg"

export default function PartnerForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative max-w-xl rounded-xl overflow-hidden border border-blue-500">
      {/* Header Section */}
      <div className="bg-[#00FF84] py-6 px-4 relative space-y-2">
        <button
          onClick={onClose}
          className="ml-auto block mr-2 text-zinc-700 hover:text-zinc-900 z-10 mt-1"
        >
          <X size={24} weight="bold" />
        </button>
        <img src={Logo} alt="Sidekick Logo" className="mx-auto pb-6" />
      </div>

      {/* Form Section */}
      <div className="bg-white px-8 py-8">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-2">Welcome!</h2>
        <p className="text-center text-zinc-500 text-lg mb-8">
          Please let us know how we can synergise.
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-blue-600 pb-2 block ml-4">Name</label>
            <input
              type="text"
              placeholder="XXXX"
              className="w-full border border-blue-500 rounded-xl px-4 py-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-blue-600 pb-2 block ml-4">Institution Name</label>
            <input
              type="text"
              placeholder="XXXX"
              className="w-full border border-blue-500 rounded-xl px-4 py-3 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-semibold text-blue-600 pb-2 block ml-4">Email Address</label>
              <input
                type="email"
                placeholder="XXXX"
                className="w-full border border-blue-500 rounded-xl px-4 py-3 focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold text-blue-600 pb-2 block ml-4">Phone Number</label>
              <input
                type="text"
                placeholder="XXXX"
                className="w-full border border-blue-500 rounded-xl px-4 py-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#00FF84] text-zinc-900 font-medium rounded-full px-8 py-3.5 mt-2 hover:bg-[#00e673] transition-colors"
            >
              Partner with Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
