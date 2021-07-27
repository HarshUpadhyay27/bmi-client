import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Graph = () => {
  const [response, setResponse] = useState();
  const fetchData = async () => {
    const res = await fetch("/graph", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setResponse(data);
  };
  console.log(response);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="graph">
      <h1>Hight-Weight Graph</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={response}
          width={500}
          height={300}
          margin={{ top: 50, right: 80, left: 0, buttom: 5 }}
        >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="height" interval={"preserveStartEnd"} />
          <YAxis dataKey="weight" interval={"preserveStartEnd"} />
          <Tooltip contentStyle={{backgroundColor: "yellow"}}/>
          <Legend />
          <Line type="monotoneX" dataKey="weight" stroke="green" activeDot={{r: 8}} />
          <Line type="monotoneX" dataKey="bmi" stroke="green" activeDot={{r: 8}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
