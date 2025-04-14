import foldedScooterImg from "../assets/product/folded.png"

type Point = {
  id: number;
  top: string;
  left: string;
  content: string;
};

const points: Point[] = [
  {
    id: 1,
    top: '70%',
    left: '40%',
    content: 'This is point 1 - cool feature here!',
  },
];

export default function FoldedScooterInfo() {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={foldedScooterImg}
        alt="Sidekick folded"
        className="w-1/2 min-w-sm rounded-xl"
      />

      {/* Points */}
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

            {/* Tooltip - shown only when point is hovered */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#296AEB] text-white font-medium px-3 py-3 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max max-w-xs pointer-events-none">
              {point.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
