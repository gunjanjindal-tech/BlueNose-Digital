import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function GrowthChart({ title, percent, data, gradientId }) {
  return (
    <div className="rounded-3xl p-8 shadow-xl bg-white text-[#063349] max-w-md w-full">
      
      <h3 className="text-xl font-bold mb-2 text-[#0E6388] leading-tight">{title}</h3>
      <p className="text-[#063349]/85 font-semibold mb-6">{percent} Growth</p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            
            <XAxis dataKey="name" tick={{ fill: "#063349" }} />
            <YAxis tick={{ fill: "#063349" }} />
            <Tooltip />

            <Bar
              dataKey="value"
              fill={`url(#${gradientId})`}
              radius={[10, 10, 0, 0]}
            />

            <defs>
             <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="rgb(14, 99, 136)" />
  <stop offset="100%" stopColor="rgb(14, 99, 136)" />
</linearGradient>

            </defs>

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
