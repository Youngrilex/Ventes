import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface State {
  series: { name: string, data: number[] }[];
  options: ApexOptions; // Use ApexOptions type
}

class ApexChart extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: "Approved",
        data: [10, 31, 21, 49, 11, 50]
      },
      {
        name: "Submitted",
        data: [5, 11, 35, 29, 31, 48]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          colors: ['#008FFB', '#00E396']
        },
        title: {
          text: 'Claims Over the Years',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
        },
        markers: {
          colors: ['#008FFB', '#00E396']
        }
      },
    };
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
