// LineChart.js
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart4 = ({ data }) => {

  const options = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    layout: {
      padding: {
        left: 10, // Adjust the left padding
        right: 10, // Adjust the right padding
        top: 10, // Adjust the top padding
        bottom: 0, // Adjust the bottom padding
      },
    },
    maintainAspectRatio: false, // Allow the chart to adjust its size
  };

  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart4;



