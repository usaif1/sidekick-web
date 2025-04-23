import unFoldedScooterImg from "../assets/product/unfolded.png"

type Point = {
  id: number;
  top: string;
  left: string;
  content: string;
};

const points: Point[] = [
  { id: 1, top: '10%', left: '16%', content: 'Speed restricted to 25km/hr' },
  { id: 2, top: '45%', left: '14%', content: 'Aircraft grade Aluminium body' },
  { id: 3, top: '82%', left: '7%', content: 'Triple Spring Suspension at front & Underbelly Double Spring Suspension at rear' },
  { id: 4, top: '80%', left: '45%', content: 'Battery, 50km IDC on a single charge' },
  { id: 5, top: '85%', left: '82%', content: 'Regenerative electronic braking' },
];

export default function UnfoldedScooterInfo() {
  return (
    <>
      <div
        className="relative py-5 px-4 rounded-2xl border-sidekick-blue border-2 mx-auto"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0V1H40V0Z' fill='%23E5E7EB'/%3E%3Cpath d='M40 39H0V40H40V39Z' fill='%23E5E7EB'/%3E%3Cpath d='M0 0V40H1V0H0Z' fill='%23E5E7EB'/%3E%3Cpath d='M39 0V40H40V0H39Z' fill='%23E5E7EB'/%3E%3C/svg%3E")`,
          backgroundSize: "10px 10px",
        }}
      >
        <img
          src={unFoldedScooterImg}
          alt="Sidekick unfolded"
          className="md:w-1/2 md:min-w-sm rounded-xl"
        />

        {points.map((point) => (
          <div
            key={point.id}
            className="absolute"
            style={{ top: point.top, left: point.left }}
          >
            <div className="relative group">
              <div className="aspect-square w-8 h-8 flex items-center justify-center bg-sidekick-green rounded-full cursor-pointer transition-all duration-200 group-hover:scale-110 shadow-lg border-2 border-white">
                <p className="text-black font-bold text-sm p-4">{point.id}</p>
              </div>
              <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-sidekick-blue text-white font-medium px-3 py-3 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max max-w-xs pointer-events-none">
                {point.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Points in Mobile */}
      <div className="pl-4 space-y-6 md:hidden my-8 md:my-0">
        {points.map((point) => (
          <div className="relative border border-sidekick-green rounded-lg px-4 py-3">
            <div className="bg-sidekick-green w-8 h-8 flex items-center justify-center absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-lg text-sidekick-black font-bold">
              {point.id}
            </div>
            <p className="font-medium">
              {point.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
