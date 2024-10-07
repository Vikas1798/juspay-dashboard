
// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// const data = [
//     { name: 'Group A', value: 38.6 },
//     { name: 'Group B', value: 20 },
//     { name: 'Group C', value: 25 },
//     { name: 'Group D', value: 16.4 },
// ];

// const COLORS = ['#95A4FC', '#B1E3FF', '#BAEDBD', '#C6C7F8'];

// const Chart = () => {
//     return (
//         <PieChart width={200} height={200}>
//             <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={50}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//                 // cornerRadius={10}
//                 className='gap-1'
//             >
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//             </Pie>
//             <Tooltip />
//         </PieChart >
//     );
// };

// export default Chart;

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {

    const [chartData] = useState({
        series: [38, 28, 26, 5],
        options: {
            chart: {
                type: 'donut',
            },
            labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
            colors: ['#1C1C1C', '#BAEDBD', '#95A4FC', '#B1E3FF'],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            responsive: [{
                breakpoint: 400,
                options: {
                    chart: {
                        width: 200
                    },
                }
            }],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    });

    return (
        <div className="w-full mx-auto overflow-hidden flex justify-center">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                height={350}
            />
        </div>
    );
};

export default Chart;
