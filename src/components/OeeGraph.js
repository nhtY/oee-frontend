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
import { FONT_PERCENTAGE, OPTIONS } from '../constants/graphConstants';




function OeeGraph({content}) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      ChartJS.defaults.font.size = getVw_Vh().vw * FONT_PERCENTAGE;
      
      
      const labels = range(0, content.length, 1);

       const data = {
        labels,
        datasets: [
          {
            label: 'Hedeflenen',
            data: labels.map(() => 70),
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: getVw_Vh().vw * 0.005,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Gerçekleşen',
            data: content.map((oee, idx) => oee.ggOee),
            borderColor: 'rgb(53, 162, 235)',
            borderWidth: getVw_Vh().vw * 0.005,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


    return (
        <Line className='w-100' options={OPTIONS} data={data} />
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