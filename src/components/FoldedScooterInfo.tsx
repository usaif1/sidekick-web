import foldedScooterImg from "../assets/product/folded.png"

type Point = {
  id: number;
  top: string;
  left: string;
  content: string;
};

const points: Point[] = [
  {
    id: 6,
    top: '70%',
    left: '40%',
    content: 'Ready to be carried around or fit into your car’s boot, Unfold and Go',
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
            <div className="aspect-square w-8 h-8 flex items-center justify-center bg-sidekick-green rounded-full cursor-pointer transition-all duration-200 group-hover:scale-110 shadow-lg border-2 border-white" >
              <p className="text-black font-bold text-sm p-4">
                {point.id}
              </p>
            </div>

            {/* Tooltip - shown only when point is hovered */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-sidekick-blue text-white font-medium px-3 py-3 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max max-w-xs pointer-events-none">
              {point.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
