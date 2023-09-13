import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

function OeeGraph() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      ChartJS.defaults.font.size = getVw_Vh().vw * 0.03;
      
       const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Son 1 Saatlik OEE Değişimi',
          },
        },
        scales: {
            x: {
                display: false
            }
        }
      };
      
      const labels = range(0, 12, 1);
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Hedeflenen',
            data: labels.map(() => 60),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Gerçekleşen',
            data: labels.map(() => 50 + Math.random() * 20),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


    return (
        <Line className='w-100' options={options} data={data} />
    );
}

function getVw_Vh() {
    const width = document.getElementsByTagName('body')[0].clientWidth;
    const height = document.getElementsByTagName('body')[0].clientHeight;

    return {vw: width, vh: height};
}

// start and stop both inclusive
const range = (start, stop, step) => {
    return Array.from({length: (stop-start) / step + 1}, (_, i) => start + i * step)
}

export default OeeGraph;