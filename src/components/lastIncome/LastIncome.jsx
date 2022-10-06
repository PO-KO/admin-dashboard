import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./lastIncome.module.scss";

const LastIncome = () => {
  const data = [
    {
      name: "Page A",
      income: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      income: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      income: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      income: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      income: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      income: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const getLastMonths = (range = 6, data) => {
    const dt = new Date();
    const dateFormat = new Intl.DateTimeFormat("en-US", {
      month: "long",
    });

    for (let i = 0; i < parseInt(range); i++) {
      let msMonth = Date.parse(`${dt.getFullYear()}-${dt.getMonth() + 1 - i}`);
      let strMonth = dateFormat.format(msMonth);

      data[range - (i + 1)].name = strMonth;
    }

    return data;
  };

  return (
    <section className={styles.lastIncome}>
      <h3 className={styles.title}>Last 6 Months (income)</h3>
      <ResponsiveContainer height="90%">
        <AreaChart
          width={730}
          height={250}
          data={getLastMonths(6, data)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LastIncome;
