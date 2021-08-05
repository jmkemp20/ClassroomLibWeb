import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Students With Books',
    type: 'bar',
    data: [17, 22, 18, 40, 35, 25, 25, 16, 22, 17, 18]
  },
  {
    name: 'Checked Out Books',
    type: 'area',
    data: [20, 30, 21, 47, 42, 33, 31, 21, 26, 17, 20]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [6, 2, 6] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '08/01/2021',
      '09/01/2021',
      '10/01/2021',
      '11/01/2021',
      '12/01/2021',
      '01/01/2022',
      '02/01/2022',
      '03/01/2022',
      '04/01/2022',
      '05/01/2022',
      '06/01/2022'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Library Activity" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
