import { products } from "@/data/products";
import { users } from "@/data/users";
import { generateChartData } from "@/utils/home";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const COLORS = ["#16a34a", "#3b82f6", "#f59e0b", "#8b5cf6"];

const CustomBar = (props) => (
  <Rectangle {...props} fill={COLORS[props.index % COLORS.length]} />
);

function DetailsChart() {
  const data = generateChartData(products.length, users.length, 12, 3);

  return (
    <div className="w-full p-5 space-y-6 bg-white border rounded-xl primary-border-color mt-6">
      <p className="text-lg font-semibold text-zinc-800">آمار کلی داشبورد</p>

      <BarChart
        style={{
          width: "100%",
          height: 360,
        }}
        responsive
        data={data}
        margin={{ top: 25, right: 15, left: 15, bottom: 10 }}
      >
        <CartesianGrid
          stroke="#e4e4e7"
          strokeDasharray="3 3"
          vertical={false}
        />
        <YAxis hide domain={[0, "dataMax"]} />
        <XAxis
          dataKey="name"
          interval={0}
          tick={{
            fill: "#3f3f46",
            fontSize: 13,
            fontWeight: 500,
          }}
          tickMargin={12}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={false}
          formatter={(value) => [value, "تعداد"]}
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e4e4e7",
            fontSize: "13px",
          }}
        />

        <Bar
          dataKey="value"
          radius={[8, 8, 0, 0]}
          maxBarSize={90}
          shape={CustomBar}
        >
          <LabelList
            dataKey="value"
            position="top"
            fill="#27272a"
            fontSize={14}
            fontWeight={600}
          />
        </Bar>
      </BarChart>
    </div>
  );
}

export default DetailsChart;
