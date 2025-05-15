import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function MonthlySpendingLineChart({ values }: { values: number[] }) {
  const daysInMonth = (month: number, year: number) =>
    Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1);

  const createData = () => {
    const date = new Date();
    const days = daysInMonth(date.getMonth() + 1, date.getFullYear());
    const chartData: { giorno: string; totale: number | null }[] = [];
    days.map((day, idx) => {
      chartData.push({ giorno: `${day}`, totale: values[idx] ?? null });
    });
    return chartData;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%", aspectRatio: "2/1" }}>
        <ResponsiveContainer>
          <LineChart data={createData()}>
            <XAxis dataKey="giorno" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="totale"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
