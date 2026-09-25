const shapes = [
  { type: "circle", color: "var(--shape-1)", size: 420, top: -140, side: "right", offset: -120, opacity: 0.35 },
  { type: "circle", color: "var(--shape-6)", size: 170, top: "6vh", side: "left", offset: -60, opacity: 0.45 },
  { type: "arch", color: "var(--shape-2)", width: 150, height: 280, top: "26vh", side: "right", offset: "6vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-3)", size: 240, top: "58vh", side: "left", offset: "4vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-4)", size: 190, top: "88vh", side: "right", offset: -60, opacity: 0.42, rotate: 8 },
  { type: "circle", color: "var(--shape-5)", size: 300, top: "108vh", side: "left", offset: -110, opacity: 0.35 },
  { type: "arch", color: "var(--shape-2)", width: 130, height: 240, top: "140vh", side: "right", offset: "3vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-1)", size: 200, top: "165vh", side: "left", offset: "6vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-6)", size: 260, top: "192vh", side: "right", offset: -90, opacity: 0.36 },
  { type: "circle", color: "var(--shape-3)", size: 170, top: "222vh", side: "left", offset: -50, opacity: 0.42 },
  { type: "arch", color: "var(--shape-2)", width: 140, height: 250, top: "248vh", side: "right", offset: "5vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-4)", size: 220, top: "272vh", side: "left", offset: "3vw", opacity: 0.38 },
  { type: "circle", color: "var(--shape-5)", size: 280, top: "298vh", side: "right", offset: -100, opacity: 0.34, rotate: -6 },
  { type: "circle", color: "var(--shape-1)", size: 180, top: "330vh", side: "left", offset: -60, opacity: 0.4 },
  { type: "arch", color: "var(--shape-2)", width: 130, height: 230, top: "355vh", side: "right", offset: "7vw", opacity: 0.4 },
  { type: "circle", color: "var(--shape-6)", size: 230, top: "382vh", side: "left", offset: "5vw", opacity: 0.38 },
  { type: "circle", color: "var(--shape-3)", size: 200, top: "408vh", side: "right", offset: -70, opacity: 0.4 },
  { type: "circle", color: "var(--shape-5)", size: 260, top: "435vh", side: "left", offset: -90, opacity: 0.35 },
  { type: "circle", color: "var(--shape-4)", size: 170, top: "462vh", side: "right", offset: "4vw", opacity: 0.42 },
  { type: "arch", color: "var(--shape-2)", width: 120, height: 210, top: "488vh", side: "left", offset: -30, opacity: 0.4 },
];

export default function BackgroundShapes() {
  return (
    <div className="bg-shapes" aria-hidden="true">
      {shapes.map((shape, i) => {
        const style = {
          top: typeof shape.top === "number" ? `${shape.top}px` : shape.top,
          [shape.side]: typeof shape.offset === "number" ? `${shape.offset}px` : shape.offset,
          background: shape.color,
          opacity: shape.opacity,
          width: `${shape.width ?? shape.size}px`,
          height: `${shape.height ?? shape.size}px`,
          transform: shape.rotate ? `rotate(${shape.rotate}deg)` : undefined,
        };
        return (
          <span
            key={i}
            className={`shape ${shape.type === "arch" ? "shape-arch" : "shape-circle"}`}
            style={style}
          />
        );
      })}
    </div>
  );
}
