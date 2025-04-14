import React from "react";

type Props = { closeModal: () => void };

const PartnerForm: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl">
      {/* Header section (green background + logo + close) */}
      <div className="bg-green-400 rounded-t-lg flex items-center justify-between px-4 py-3">
        <h1 className="text-xl text-center font-extrabold text-white tracking-wide">
          SIDEKICK
        </h1>
        <button
          onClick={closeModal}
          className="text-white font-bold text-lg"
        >
          &times;
        </button>
      </div>

      {/* Body/form section */}
      <div className="px-6 py-6">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-1">
          Welcome!
        </h2>
        <p className="text-gray-600 text-center mb-5">
          Please let us know how we can support you.
        </p>

        <form className="space-y-4 flex flex-col justify-center">
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Institution Name */}
          <div>
            <label
              htmlFor="institution"
              className="block text-gray-700 font-medium mb-1"
            >
              Institution Name
            </label>
            <input
              id="institution"
              type="text"
              placeholder="Enter institution name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Email + Phone (side by side) */}
          <div className="flex space-x-2">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                placeholder="(XXX) XXX-XXXX"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-green-500 text-white rounded-full py-2 px-4 font-semibold hover:bg-green-600 transition-colors"
          >
            Partner with Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
