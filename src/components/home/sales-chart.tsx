import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

export default function SalesChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "Sales",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px] w-[450px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="var(--color-sales)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
