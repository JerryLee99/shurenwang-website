const nodes = [
  { cx: 70, cy: 78, r: 16, fill: "#1c1917" },
  { cx: 180, cy: 54, r: 12, fill: "#9a3f14" },
  { cx: 250, cy: 140, r: 18, fill: "#1c1917" },
  { cx: 120, cy: 180, r: 11, fill: "#2f5d53" },
  { cx: 210, cy: 210, r: 8, fill: "#1c1917" },
];

const lines: Array<[number, number]> = [
  [0, 1],
  [0, 3],
  [1, 2],
  [3, 2],
  [3, 4],
  [2, 4],
];

export function RelationSketch() {
  return (
    <figure className="rounded-3xl border border-line bg-paper-2 p-6 shadow-[0_24px_50px_-36px_rgba(28,25,23,0.5)]">
      <svg
        viewBox="0 0 320 260"
        role="img"
        aria-labelledby="sketch-title sketch-desc"
        className="h-auto w-full"
      >
        <title id="sketch-title">连接示意图</title>
        <desc id="sketch-desc">
          几个圆点用细线相连，用来占位，不是产品界面，也不是真实关系数据。
        </desc>
        {lines.map(([from, to]) => {
          const start = nodes[from];
          const end = nodes[to];
          if (!start || !end) return null;
          return (
            <line
              key={`${from}-${to}`}
              x1={start.cx}
              y1={start.cy}
              x2={end.cx}
              y2={end.cy}
              stroke="#e4dcd0"
              strokeWidth="1.5"
            />
          );
        })}
        {nodes.map((node) => (
          <circle key={`${node.cx}-${node.cy}`} cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} />
        ))}
      </svg>
      <figcaption className="mt-2 text-sm text-ink-soft">示意图 · 占位，非正式界面</figcaption>
    </figure>
  );
}
