// LineChart.js
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart3 = ({ data }) => {

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 10, // Adjust the left padding
        right: 10, // Adjust the right padding
        top: 10, // Adjust the top padding
        bottom: 70, // Adjust the bottom padding
      },
    },
    maintainAspectRatio: false, // Allow the chart to adjust its size
  };

    // const options = {
    //     scales: {
    //       x: {
    //         display: false, // Hide x-axis
    //       },
    //       y: {
    //         display: false, // Hide y-axis
    //       },
    //     },
    //     plugins: {
    //       legend: {
    //         display: false, // Hide legend
    //       },
    //     },
    // }; 

  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart3;



// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const LineChart3 = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Monthly Sales',
//         data: [65, 59, 80, 81, 56],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default LineChart3;
