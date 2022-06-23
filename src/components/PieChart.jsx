import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContextValues } from '../context/context';


const Piechart = () => {
  
  const{ pieData,COLORS} =useContextValues(); 

 const  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value} units`}</label>
       </div>
    );
 }
 return null;
};
 
  return (
    <div className='md:w-[330px] w-[90%] h-auto bg-white shadow-lg rounded-lg p-3 mb-11'>
      <h1 className='ml-2 font-semibold text-gray-700'>Overview</h1>
      <PieChart width={300} height={330}>
      <Pie
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
   </div>
  )
}

export default Piechart