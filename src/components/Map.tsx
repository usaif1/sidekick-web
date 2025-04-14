import { MagnifyingGlass } from "@phosphor-icons/react"

const Map = () => {
  return (
    <section>
      <div className="max-w-7xl w-[80vw] mx-auto py-16">
        <div className="relative">
          {/* replace below div with map element : ) */}
          <div className="bg-gray-300 rounded-xl h-120 my-16 mb-8"></div>
          <form className="absolute bottom-8 right-1/2 translate-x-1/2">
            <div className="relative items-center gap-2 bg-white w-sm mx-auto border rounded-2xl border-blue-500">
              <MagnifyingGlass size={24} className="absolute top-1/2 -translate-y-1/2 left-4 text-blue-500" />
              <input type="search" name="" id="" className="grow pl-12 py-4 w-full focused:border-none focused:outline-none" placeholder="Search your Area" />
            </div>
          </form>
        </div>
        {/* Quick Location Buttons */}
        <div className="flex items-center gap-4 justify-center mx-auto">
          <button className="bg-[#296AEB] px-5 py-3 text-sm rounded-2xl text-white font-medium">
            Bangalore
          </button>
          <button className="bg-[#296AEB] px-5 py-3 text-sm rounded-2xl text-white font-medium">
            Hyderabad
          </button>
          <button className="bg-[#296AEB] px-5 py-3 text-sm rounded-2xl text-white font-medium">
            New Delhi
          </button>
        </div>
      </div>
    </section>
  )
}

export default Map