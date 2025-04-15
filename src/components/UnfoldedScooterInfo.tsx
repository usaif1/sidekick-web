import unFoldedScooterImg from "../assets/product/unfolded.png"


type Point = {
  id: number;
  top: string;
  left: string;
  content: string;
};


/*
Battery, 50km IDC on a single charge
Aircraft grade Aluminium body
Regenerative electronic braking 
Triple Spring Suspension at front & Underbelly Double Spring Suspension at rear
 */

const points: Point[] = [
  { id: 1, top: '10%', left: '16%', content: 'Battery, 50km IDC on a single charge' },
  { id: 2, top: '45%', left: '11%', content: 'Aircraft grade Aluminium body' },
  { id: 3, top: '81%', left: '6%', content: 'Regenerative electronic braking' },
  { id: 4, top: '81%', left: '50%', content: 'Triple Spring Suspension at front & Underbelly Double Spring Suspension at rear' },
  { id: 5, top: '88%', left: '64%', content: 'Speed restricted to 25km/hr' },
];

export default function UnfoldedScooterInfo() {
  return (
    <div className="relative">
      <img
        src={unFoldedScooterImg}
        alt="Sidekick unfolded"
        className="w-1/2 min-w-sm rounded-xl"
      />

      {points.map((point) => (
        <div
          key={point.id}
          className="absolute"
          style={{ top: point.top, left: point.left }}
        >
          {/* Dot and Tooltip Wrapper */}
          <div className="relative group">
            {/* Blue Point */}
            <div className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer transition-all duration-200 group-hover:scale-110 shadow-lg border-2 border-white" />

            {/* Tooltip - only shows when hovering over the dot */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-sidekick-blue text-white font-medium px-3 py-3 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max max-w-xs pointer-events-none">
              {point.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
