import React from 'react';
import '../assets/styles/components/RenderChart.css'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const RenderChart = ({data}) => {
 
  return (
    <div className='wrappChart'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 50, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Area type="monotone" dataKey="med_age" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="med_age" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="med_age" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Tooltip />
      </AreaChart>
    </div>
  );
};

export default RenderChart;